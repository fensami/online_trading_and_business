// Get role
export async function getRole(email) {
    const response = await fetch(`https://online-trading-and-business-five.vercel.app/api/allUsers/${email}`);
    const user = await response.json();
    console.log("user data role:", user)
    return user?.role;
}