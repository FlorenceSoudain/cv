function afficher_cacher(experiencespro)
{
    if(document.getElementById("experiencespro").style.display=="none")
    {
        document.getElementById("experiencespro").style.display="block";
        document.getElementById('bouton1').innerHTML="-";
    }
    else
    {
        document.getElementById("experiencespro").style.display="none";
        document.getElementById('bouton1').innerHTML="+";
    }
    return true;
}
function afficher_cacher2(diplomes)
{
    if(document.getElementById("diplomes").style.display=="none")
    {
        document.getElementById("diplomes").style.display="block";
        document.getElementById('bouton2').innerHTML="-";
    }
    else
    {
        document.getElementById("diplomes").style.display="none";
        document.getElementById('bouton2').innerHTML="+";
    }
    return true;
}
function afficher_cacher3(competences)
{
    if(document.getElementById("competences").style.display=="none")
    {
        document.getElementById("competences").style.display="block";
        document.getElementById('bouton3').innerHTML="-";
    }
    else
    {
        document.getElementById("competences").style.display="none";
        document.getElementById('bouton3').innerHTML="+";
    }
    return true;
}