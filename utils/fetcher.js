export const fetcher = async (url)=>{
    let response;
    await fetch(url,)
        .then((res) =>res.json())
        .then(data=>{
            response = data;
        })
        .catch((err) => console.log(err));
    return  response;
}
