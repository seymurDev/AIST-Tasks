const pathArea=document.getElementById('urlpath')
const paramsArea=document.getElementById('queryparams')
function separateURL(){
    const currentUrl=window.location.href
    const url=new URL(currentUrl)
    const pathName=url.pathname
    const queryParams={}
    // console.log(pathName);
    for(const [key,value] of url.searchParams){
        queryParams[key]=`${value}`
        // console.log(queryParams);
    }
    return {path:pathName,queryParams:queryParams}
}
const {path,queryParams}=separateURL()
pathArea.innerHTML=`<br>${path}`
htmll=''
for (const key in queryParams) {
    if (Object.hasOwnProperty.call(queryParams, key)) {
      htmll += `<br>${key}: ${queryParams[key]}`;
    }
}
paramsArea.innerHTML=htmll