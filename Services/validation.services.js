const validatorStructure = async ({ data }) => {
    console.log("🚀 ~ file: validation.services.js:2 ~ validatorStructure ~ data:", data)

    const dataSplit = data.split('\n')

    const todoR = []
    let todoO = "\n"


    for (let index = 0; index < dataSplit.length; index++) {
        const elementCSV = dataSplit[index];

        let i = 0;
        const elementCSVSplit = elementCSV.split(' , ')[i].split(',')

        if ((elementCSV !== 'file,text,number,hex') && elementCSVSplit.length == 4) {

            if (elementCSVSplit.includes(undefined)) break
            if ((!(elementCSVSplit[i]).includes('.csv'))) break
            if (typeof elementCSVSplit[i + 1] === "string" && !isNaN(parseInt(elementCSVSplit[i + 1])) && (/^[A-Z]+$/gi.test(elementCSVSplit[i + 1]))) break
            if ((!typeof (parseInt(elementCSVSplit[i + 2]) === 'number') && (/^[0-9]*$/.test(elementCSVSplit[i + 2])))) break
            if (!(/^[0-9A-F]+$/gi.test(elementCSVSplit[i + 3]))) break


            todoR.push(

                {
                    // "files": elementCSVSplit[0],
                    "text": elementCSVSplit[1],
                    "number": elementCSVSplit[2],
                    "hex": elementCSVSplit[3]
                }
            )
        }



    }
    return todoR.flat()

}


module.exports = {
    validatorStructure
}