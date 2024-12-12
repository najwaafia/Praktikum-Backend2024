const Download = () => {
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            if (status){
                resolve("Download Success");
            } else {
                reject("Download Failed");
            }
        }, 5000);
    });
};

// console.log(Download());
Download().then((res)=> {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});