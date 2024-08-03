/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Authenticator, useTheme } from '@aws-amplify/ui-react';
import { getCurrentUser } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { createUser, createFamilyMember } from '../graphql/mutations';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports';

const client = generateClient();

// Configure Amplify
Amplify.configure(awsconfig);

const Login = () => {
  const navBarHeight = '80px'; // The height of your navbar
  const { tokens } = useTheme();

  const [familyMembers, setFamilyMembers] = useState([{ name: '' }]);
  const [familyName, setFamilyName] = useState(''); // State to hold family name

  const handleAddMember = () => {
    setFamilyMembers([...familyMembers, { name: '' }]);
  };

  const handleMemberChange = (index, event) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][event.target.name] = event.target.value;
    setFamilyMembers(updatedMembers);
  };

  const handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await getCurrentUser(); // Ensure user is fetched correctly
      console.log('user', user)

      // Create the primary user first
      const createUserResponse = await client.graphql({
        query: createUser,
        variables: {
          input: {
            email: user.signInDetails.loginId,
            familyName: familyName, // Use state for family name
          }
        }
      });

      const userId = createUserResponse.data.createUser.id;

      // Add family members linked to the primary user
      for (const member of familyMembers) {
        await client.graphql({
          query: createFamilyMember,
          variables: {
            input: {
              id: userId,
              name: member.name,
            }
          }
        });
      }

      console.log('Family members successfully added!');

    } catch (error) {
      console.error('Error adding family members:', error);
    }
  };

  return (
    <div css={{ paddingTop: navBarHeight }}>
      <Authenticator signUpConfig={{ signUpFields: [{ key: "family_name", label: "Family Name", required: true, displayOrder: 1, type: "string" }] }}>
        {({ signOut, user }) => (
          <main style={{ padding: tokens.space.large }}>
            <h1>Welcome, {user.username}!</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={familyName}
                  onChange={handleFamilyNameChange}
                  placeholder="Family Name"
                  required
                />
              </div>
              {familyMembers.map((member, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, e)}
                    placeholder="Family Member Name"
                    required
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddMember}>Add Another Member</button>
              <button type="submit">Submit</button>
            </form>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default Login;
