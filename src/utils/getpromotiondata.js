  
const getpromotiondata = async () => {
         const res = await fetch('http://localhost:5000/promotions')
         return res.json();
};

export default getpromotiondata;