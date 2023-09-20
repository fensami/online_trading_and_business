// Get role
export async function getRole(email) {
    const response = await fetch(`http://localhost:3000/api/allUsers/${email}`);
    const user = await response.json();
    console.log("user data role:", user)
    return user?.role;
}