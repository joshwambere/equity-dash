export const pieOptions=(title)=>{
    return{
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: title,

                },

            }
        }
    }
}
