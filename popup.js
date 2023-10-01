const profiles = [
                        'https://www.linkedin.com/in/pmclanahan/',
                        'https://www.linkedin.com/in/hemchandar-moorthy-213113215/',
                        'https://www.linkedin.com/in/vinoth118/'
                  ]

                  const button = document.getElementById("button")
                  const here = document.getElementById("here")
                  button.addEventListener("click",async()=>{
                    profiles.forEach(async(profile) => { 
                    const tab = await chrome.tabs.create({ url: profile, active: false });
                    await new Promise(resolve => setTimeout(resolve, 8000));
                    await chrome.tabs.sendMessage(tab.id, {action : 'profile-return'}, 
                    async(response) => 
                      {
                        here.innerText += `${response.name}'s data posted to db\n`
                        await fetch("http://localhost:3000/",{
                        method:"POST",
                        mode:"no-cors",
                        headers:{
                          'Accept': 'application/json, text/plain, */*',
                          'Content-Type': 'application/x-www-form-urlencoded'
                        },

                        body:JSON.stringify({
                          name:await response.name,
                          url:profile,
                          bio:await response.bio,
                          location:await response.location,
                          followersCount:await response.followersCount,
                          connectionsCount:await response.connectionsCount
                        })
                      }
                     )
                    })
                      }
                    )
                    await chrome.tabs.remove(tab.id);
                  });