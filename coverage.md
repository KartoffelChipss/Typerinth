# This is a list of supported endpoints for this library

| Icon | Meaning                               |
| ---- | ------------------------------------- |
| ✅   | Implemented & Integration tests       |
| ☑️   | Implemented, but no integration tests |
| ❌   | Not implemented                       |

A 🔒 next to the name means that the endpoint needs authentication.

## Projects

| Name                                                                                                                                                                            | Implemented |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Search projects [[M]](https://docs.modrinth.com/api/operations/searchprojects/) [[T]](https://typerinth.js.org/classes/Modrinth.html#search)                                    | ✅          |
| Get a project [[M]](https://docs.modrinth.com/api/operations/getproject/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getproject)                                      | ✅          |
| Delete a project 🔒 [[M]](https://docs.modrinth.com/api/operations/deleteproject/)                                                                                              | ❌          |
| Modify a project 🔒 [[M]](https://docs.modrinth.com/api/operations/modifyproject/)                                                                                              | ❌          |
| Get multiple projects [[M]](https://docs.modrinth.com/api/operations/getprojects/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getprojects)                            | ✅          |
| Bulk-edit multiple projects 🔒 [[M]](https://docs.modrinth.com/api/operations/patchprojects/)                                                                                   | ❌          |
| Get a list of random projects [[M]](https://docs.modrinth.com/api/operations/randomprojects/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getrandomprojects)           | ✅          |
| Create a project 🔒 [[M]](https://docs.modrinth.com/api/operations/createproject/)                                                                                              | ❌          |
| Delete project's icon 🔒 [[M]](https://docs.modrinth.com/api/operations/deleteprojecticon/)                                                                                     | ❌          |
| Change project's icon 🔒 [[M]](https://docs.modrinth.com/api/operations/changeprojecticon/)                                                                                     | ❌          |
| Check project slug/ID validity [[M]](https://docs.modrinth.com/api/operations/checkprojectvalidity/) [[T]](https://typerinth.js.org/classes/Modrinth.html#checkprojectvalidity) | ✅          |
| Add a gallery image 🔒 [[M]](https://docs.modrinth.com/api/operations/addgalleryimage/)                                                                                         | ❌          |
| Delete a gallery image 🔒 [[M]](https://docs.modrinth.com/api/operations/deletegalleryimage/)                                                                                   | ❌          |
| Modify a gallery image 🔒 [[M]](https://docs.modrinth.com/api/operations/modifygalleryimage/)                                                                                   | ❌          |
| Get all of a project's dependencies [[M]](https://docs.modrinth.com/api/operations/getdependencies/)                                                                            | ❌          |
| Follow a project 🔒 [[M]](https://docs.modrinth.com/api/operations/followproject/)                                                                                              | ❌          |
| Unfollow a project 🔒 [[M]](https://docs.modrinth.com/api/operations/unfollowproject/)                                                                                          | ❌          |
| Schedule a project 🔒 [[M]](https://docs.modrinth.com/api/operations/scheduleproject/)                                                                                          | ❌          |

## Versions

| Name                                                                                                                                                                 | Implemented |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| List project's versions [[M]](https://docs.modrinth.com/api/operations/getprojectversions/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getprojectversions) | ✅          |
| Get a version [[M]](https://docs.modrinth.com/api/operations/getversion/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getversion)                           | ✅          |
| Delete a version 🔒 [[M]](https://docs.modrinth.com/api/operations/deleteversion/)                                                                                   | ❌          |
| Modify a version 🔒 [[M]](https://docs.modrinth.com/api/operations/modifyversion/)                                                                                   | ❌          |
| Get a version given a version number or ID [[M]](https://docs.modrinth.com/api/operations/getversionfromidornumber/)                                                 | ❌          |
| Create a version 🔒 [[M]](https://docs.modrinth.com/api/operations/createversion/)                                                                                   | ❌          |
| Schedule a version 🔒 [[M]](https://docs.modrinth.com/api/operations/scheduleversion/)                                                                               | ❌          |
| Get multiple versions [[M]](https://docs.modrinth.com/api/operations/getversions/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getversions)                 | ✅          |
| Add files to version 🔒 [[M]](https://docs.modrinth.com/api/operations/addfilestoversion/)                                                                           | ❌          |

## Version Files

| Name                                                                                                                                                                | Implemented |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Get version from hash [[M]](https://docs.modrinth.com/api/operations/versionfromhash/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getversionfromfilehash) | ✅          |
| Delete a file from its hash 🔒 [[M]](https://docs.modrinth.com/api/operations/deletefilefromhash/)                                                                  | ❌          |
| Latest version of a project from a hash, loader(s), and game version(s) [[M]](https://docs.modrinth.com/api/operations/getlatestversionfromhash/)                   | ❌          |
| Get versions from hashes [[M]](https://docs.modrinth.com/api/operations/versionsfromhashes/)                                                                        | ❌          |
| Latest versions of multiple project from hashes, loader(s), and game version(s) [[M]](https://docs.modrinth.com/api/operations/getlatestversionsfromhashes/)        | ❌          |

## Users

| Name                                                                                                                                                                     | Implemented |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Get a user [[M]](https://docs.modrinth.com/api/operations/getuser/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getuser)                                        | ✅          |
| Modify a user 🔒 [[M]](https://docs.modrinth.com/api/operations/modifyuser/)                                                                                             | ❌          |
| Get user from authorization header 🔒 [[M]](https://docs.modrinth.com/api/operations/getuserfromauth/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getauthuser) | ☑️          |
| Get multiple users [[M]](https://docs.modrinth.com/api/operations/getusers/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getusers)                              | ✅          |
| Change user's avatar 🔒 [[M]](https://docs.modrinth.com/api/operations/changeusericon/)                                                                                  | ❌          |
| Get user's projects [[M]](https://docs.modrinth.com/api/operations/getuserprojects/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getuserprojects)               | ✅          |
| Get user's followed projects 🔒 [[M]](https://docs.modrinth.com/api/operations/getfollowedprojects/)                                                                     | ❌          |
| Get user's payout history 🔒 [[M]](https://docs.modrinth.com/api/operations/getpayouthistory/)                                                                           | ❌          |
| Withdraw payout balance to PayPal or Venmo 🔒 [[M]](https://docs.modrinth.com/api/operations/withdrawpayout/)                                                            | ❌          |

## Notifications

| Name                                                                                                      | Implemented |
| --------------------------------------------------------------------------------------------------------- | ----------- |
| Get user's notifications 🔒 [[M]](https://docs.modrinth.com/api/operations/getusernotifications/)         | ❌          |
| Get notification from ID 🔒 [[M]](https://docs.modrinth.com/api/operations/getnotification/)              | ❌          |
| Delete notification 🔒 [[M]](https://docs.modrinth.com/api/operations/deletenotification/)                | ❌          |
| Mark notification as read 🔒 [[M]](https://docs.modrinth.com/api/operations/readnotification/)            | ❌          |
| Get multiple notifications 🔒 [[M]](https://docs.modrinth.com/api/operations/getnotifications/)           | ❌          |
| Delete multiple notifications 🔒 [[M]](https://docs.modrinth.com/api/operations/deletenotifications/)     | ❌          |
| Mark multiple notifications as read 🔒 [[M]](https://docs.modrinth.com/api/operations/readnotifications/) | ❌          |

## Threads

| Name                                                                                                  | Implemented |
| ----------------------------------------------------------------------------------------------------- | ----------- |
| Get your open reports 🔒 [[M]](https://docs.modrinth.com/api/operations/getopenreports/)              | ❌          |
| Report a project, user, or version 🔒 [[M]](https://docs.modrinth.com/api/operations/submitreport/)   | ❌          |
| Get report from ID 🔒 [[M]](https://docs.modrinth.com/api/operations/getreport/)                      | ❌          |
| Modify a report 🔒 [[M]](https://docs.modrinth.com/api/operations/modifyreport/)                      | ❌          |
| Get multiple reports 🔒 [[M]](https://docs.modrinth.com/api/operations/getreports/)                   | ❌          |
| Get a thread 🔒 [[M]](https://docs.modrinth.com/api/operations/getthread/)                            | ❌          |
| Send a text message to a thread 🔒 [[M]](https://docs.modrinth.com/api/operations/sendthreadmessage/) | ❌          |
| Get multiple threads 🔒 [[M]](https://docs.modrinth.com/api/operations/getthreads/)                   | ❌          |
| Delete a thread message 🔒 [[M]](https://docs.modrinth.com/api/operations/deletethreadmessage/)       | ❌          |

## Teams

| Name                                                                                                                                                                            | Implemented |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Get a project's team members [[M]](https://docs.modrinth.com/api/operations/getprojectteammembers/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getprojectteammembers) | ☑️          |
| Get a team's members [[M]](https://docs.modrinth.com/api/operations/getteammembers/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getteammembers)                       | ☑️          |
| Add a user to a team 🔒 [[M]](https://docs.modrinth.com/api/operations/addteammember/)                                                                                          | ❌          |
| Get the members of multiple teams [[M]](https://docs.modrinth.com/api/operations/getteams/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getmultipleteammembers)        | ☑️          |
| Join a team 🔒 [[M]](https://docs.modrinth.com/api/operations/jointeam/)                                                                                                        | ❌          |
| Remove a member from a team 🔒 [[M]](https://docs.modrinth.com/api/operations/deleteteammember/)                                                                                | ❌          |
| Modify a team member's information 🔒 [[M]](https://docs.modrinth.com/api/operations/modifyteammember/)                                                                         | ❌          |
| Transfer team's ownership to another user 🔒 [[M]](https://docs.modrinth.com/api/operations/transferteamownership/)                                                             | ❌          |

## Tags

| Name                                                                                                                                                                | Implemented |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Get a list of categories [[M]](https://docs.modrinth.com/api/operations/categorylist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)                 | ✅          |
| Get a list of loaders [[M]](https://docs.modrinth.com/api/operations/loaderlist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)                      | ✅          |
| Get a list of game versions [[M]](https://docs.modrinth.com/api/operations/versionlist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)               | ✅          |
| Get a list of licenses [[M]](https://docs.modrinth.com/api/operations/licenselist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)                    | ✅          |
| Get the text and title of a license [[M]](https://docs.modrinth.com/api/operations/licensetext/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getlicense)   | ✅          |
| Get a list of donation platforms [[M]](https://docs.modrinth.com/api/operations/donationplatformlist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag) | ✅          |
| Get a list of report types [[M]](https://docs.modrinth.com/api/operations/reporttypelist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)             | ✅          |
| Get a list of project types [[M]](https://docs.modrinth.com/api/operations/projecttypelist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)           | ✅          |
| Get a list of side types [[M]](https://docs.modrinth.com/api/operations/sidetypelist/) [[T]](https://typerinth.js.org/classes/Modrinth.html#gettag)                 | ✅          |

## Misc

| Name                                                                                                                                                                            | Implemented |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Various statistics about this Modrinth instance [[M]](https://docs.modrinth.com/api/operations/statistics/) [[T]](https://typerinth.js.org/classes/Modrinth.html#getstatistics) | ☑️          |
