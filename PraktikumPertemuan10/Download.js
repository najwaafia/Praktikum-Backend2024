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

// laatihan using async/await
const startDownload = async () => {
    try {
        const result = await Download(); // Tunggu hingga Promise selesai
        console.log("Hasil dengan async/await:", result);
    } catch (error) {
        console.log("Error dengan async/await:", error);
    } finally {
        console.log("Proses download selesai.");
    }
};
