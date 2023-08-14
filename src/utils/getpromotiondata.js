 
const getpromotiondata = async () => {
         const res = await fetch('promotion.json')
         return res.json();
};

export default getpromotiondata;