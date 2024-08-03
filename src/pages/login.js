/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Authenticator, useTheme } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser, createFamilyMember } from './graphql/mutations';
import '@aws-amplify/ui-react/styles.css';

const Login = () => {
  const navBarHeight = '80px'; // The height of your navbar
  const { tokens } = useTheme();
  
  const [familyMembers, setFamilyMembers] = useState([{ name: '' }]);
  
  const handleAddMember = () => {
    setFamilyMembers([...familyMembers, { name: '' }]);
  };

  const handleMemberChange = (index, event) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][event.target.name] = event.target.value;
    setFamilyMembers(updatedMembers);
  };

  const handleSubmit = async (formData) => {
      event.preventDefault();
      
      try {
        // Create the primary user first
        const createUserResponse = await API.graphql(graphqlOperation(createUser, {
          input: {
            email: user.attributes.email,
            familyName: formData.family_name, // Assuming you have a field for family name
          }
        }));
    
        const userId = createUserResponse.data.createUser.id;
        
        // Add family members linked to the primary user
        for (const member of familyMembers) {
          await API.graphql(graphqlOperation(createFamilyMember, {
            input: {
              userID: userId,
              name: member.name,
            }
          }));
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
              {familyMembers.map((member, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, e)}
                    placeholder="Family Member Name"
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
