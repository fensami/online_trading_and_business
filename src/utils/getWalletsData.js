 

const getWalletsData = async () => {
   const res = await fetch('http://localhost:5000/wallets')
        return res.json();
};

export default getWalletsData;