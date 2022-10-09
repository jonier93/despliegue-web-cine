document.querySelector('#btnMain').addEventListener('click', main)
document.querySelector('#btnLogin').addEventListener('click', logearse)
document.querySelector('#btnRegister').addEventListener('click', registrar)
document.querySelector('#btnBillboard').addEventListener('click', cartelera)
document.querySelector('#btnContact').addEventListener('click', contactar)

function main(){
    window.location.href=`home`
}
function logearse(){
    window.location.href=`login`
}
function registrar(){
    window.location.href=`register`
}
function cartelera(){
    window.location.href=`billboard`
}
function contactar(){
    window.location.href="contact"
}