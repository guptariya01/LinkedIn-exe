chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if(request.action == 'profile-return')
    {

        //scrapping
        const name =document.getElementsByClassName('text-heading-xlarge inline t-24 v-align-middle break-words');
        const bio =document.getElementsByClassName('text-body-medium break-words');
        const location =document.getElementsByClassName('text-body-small inline t-black--light break-words');
        const followersCount = document.getElementsByClassName('t-bold');
        const Name =await name[0].innerText;
        const Bio =await bio[0].innerText;
        const Location = await location[0].innerText;
        const Followers = await followersCount[0].innerText;
        var c = await followersCount[1]?.innerText;
        if(!c)
        c = 0;
        console.log(name,bio);
        const details = {name:Name,bio:Text,location:Location,followersCount:Followers,connectionsCount:
        c};
        sendResponse(details);
    }
});