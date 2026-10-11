const api = 'https://student-api-ux6q.onrender.com' //api çağrisını burada yaptım

export function getStudentData() { //export fonksiyonu dışarı açmak
    return fetch(api) 
    .then (response => {
        if(!response.ok) {
            throw new Error("error"); 
        }
         return response.json();
    })
    .then (data => {
        console.log(data);
        return data;
    })
    .catch (err => {
        console.log(err)

        return Promise.reject(err)
    });
}
