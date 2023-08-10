export const goToId = (id:string) => {
    const target = document.getElementById(id)
    const position = target?.offsetTop
    scrollTo({
        top : position,
        behavior:"smooth"
    })
}