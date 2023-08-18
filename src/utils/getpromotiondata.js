  
const getpromotiondata = async () => {
         const res = await fetch('http://localhost:5000/promotions', {
                cache: "force-cache"
         })
         return res.json();
};

export default getpromotiondata;