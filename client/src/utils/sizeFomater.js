const sizeFormater = (sizeKB, fileName)=>{
    let _MB;
    let _KB;

    if(!sizeKB) return null

    let fileSizeInMb = Math.round((sizeKB / (1024)))
    fileSizeInMb =  `${parseInt(fileSizeInMb)}`
    if(fileSizeInMb < 10000){
     _MB =  fileSizeInMb.slice(0, 1)

    }else if(fileSizeInMb >= 10000){
      _MB =  fileSizeInMb.slice(0, 2)
    }else if(fileSizeInMb >= 100000){
      _MB =  fileSizeInMb.slice(0, 2)
    }
    _KB =  fileSizeInMb.slice(1, 3)
    return `${_MB},${_KB}`

  } 

 

  export default sizeFormater