const DownloadTugas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("windows-10.exe");
        }, 3000);
    });
};

//show hasil downoad
const showDownload = (result) => {
    console.log("Download Selesai");
    console.log(`Hasil Download: ${result}`);
};

//using async/await
const startDownload = async () => {
    try {
        const result = await DownloadTugas();
        showDownload(result);
    } catch (error) {
        console.log("Error: ", error);
    }
};

startDownload();
