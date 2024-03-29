//import axios from "axios";

//import AsyncStorage from '@react-native-async-storage/async-storage';


/* User */
const initUserState = {
    userName:'',
    password:'',
    userFolderList:
    [{name: 'favorite', id: 0, image: 'https://i.pinimg.com/564x/f3/6d/6d/f36d6d18240ccae47ad3932c9935ea2d.jpg'},
    {name: 'quokka', id: 1, image: 'https://i.pinimg.com/564x/8b/c3/50/8bc3508f9b6b2ae990b4b15b0ffe14bb.jpg'}]
};

export function account(state = initUserState, action) {
    switch (action.type) {
        case '@ACCOUNT/SET_USER_NAME':
            return {
                ...state,
                userName:action.userName
            };
        case '@ACCOUNT/SET_FOLDER_LIST':
            return {
                ...state,
                userFolderList:action.userFolderList
            };
        default:
            return state;
    }
};
/*Pins*/
const initTotalPins= {
    totalPins: 5
};
export function Pins(state = initTotalPins, action) {
    switch (action.type) {
        case '@PINS/INCREMENT_TOTAL_PINS':
            return {
                totalPins: state.totalPins + 1
            };
        default:
            return state;
    }
};
/* Favorite */
export function favorite(state = [], action) {
    switch (action.type) {
        case '@FAVORITE/ADD_FAVORITE':
            return {
                ...state,
                addURL: action.URL
            };
        case '@FAVORITE/DELETE_FAVORITE':
            return {
                ...state,
                deleteURL: action.URL
            };
        default:
            return state;
    }
};


/* Folder */
const initFolder = {
    currentFolder: 0,
    folderList: [{name: 'favorite', id: 0, image: 'https://i.pinimg.com/564x/f3/6d/6d/f36d6d18240ccae47ad3932c9935ea2d.jpg'},
                 {name: 'quokka', id: 1, image: 'https://i.pinimg.com/564x/8b/c3/50/8bc3508f9b6b2ae990b4b15b0ffe14bb.jpg'}]
                 /*{name: 'cat', id: 2, image: 'https://i.pinimg.com/736x/4b/58/f3/4b58f34182fdabf1e38f660d0ba20498.jpg'},
                 {name: 'pixel', id: 3, image: 'https://i.pinimg.com/564x/06/21/99/062199a60a5c693bec625e839f0e6c83.jpg'},
                 {name: 'pineapple', id: 4, image: 'https://i.pinimg.com/736x/8f/1c/01/8f1c0125387838a39f32b0132ab0ebf3.jpg'},
                 {name: 'tower', id: 5, image: 'https://i.pinimg.com/564x/91/ea/4b/91ea4bb453a9286951efb70b1409abae.jpg'},
                 {name: 'elf', id: 6, image: 'https://i.pinimg.com/564x/6c/80/9e/6c809e023e6635295720994b52eb4fdd.jpg'},
                 {name: 'avatar', id: 7, image: 'https://i.pinimg.com/564x/97/ed/4e/97ed4eb2f8fa26e3658a4b0ddbcf0ff2.jpg'},
                 {name: 'pua', id: 8, image: 'https://i.pinimg.com/564x/8b/5d/88/8b5d883efedaae6db53519d5327ffb57.jpg'},
                 {name: 'penguin', id: 9, image: 'https://i.pinimg.com/564x/fc/e2/56/fce2564630f927b9e53c6667b53c69e5.jpg'},]*/,
    folderHasMore: true,
    folderLoading: false,
};

export function Folder(state = initFolder, action) {
    switch (action.type) {
        case '@FOLDER/READ_STORED_FOLDER':
            return {
                ...action.storedData
            }
        case '@FOLDER/ADD_FOLDER':
            if(action.folderName.length!==0){
                var newFolderList = JSON.parse(JSON.stringify(state.folderList));
                var len = state.folderList.length;
                newFolderList.push({name: action.folderName, id: len, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png'});
                return{
                    ...state,
                    folderList: newFolderList

                };
            }; 
            return{
                ...state
            }
        case '@FOLDER/SET_CURRENTFOLDER':
            return {
                ...state,
                currentFolder: action.id
            };
        case '@FOLDER/UPDATE_RECENTLY':
            // 誰id對到action.id就要換到前面
            var newFolderList = JSON.parse(JSON.stringify(state.folderList));
            var len = newFolderList.length;
            var switchId = 1;
            for(var i = 0; i < len; i++){
                if(newFolderList[i].id == action.id){
                    switchId = i;
                    break;
                }
            } 
            if(action.id != 0){
                var head = newFolderList[0];
                var recent = newFolderList[switchId];
                newFolderList.splice(switchId, 1);
                newFolderList.splice(0, 1);
                newFolderList.unshift(recent);
                newFolderList.unshift(head);
            }
            
            return {
                ...state,
                folderList: newFolderList
            };
        case '@FOLDER/CHECK_FOLDER_EMPTY':
            var newFolderList = JSON.parse(JSON.stringify(state.folderList));
            var len = newFolderList.length;
            var chosenId = 1;
            for(var i = 0; i < len; i++){
                if(newFolderList[i].id == action.id){
                    chosenId = i;
                    break;
                }
            } 
            if(state.folderList[chosenId].image == 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png'){
                newFolderList[chosenId].image = action.url;
                
            }
            return{
                ...state,
                folderList: newFolderList
            };
        case '@FOLDER/START_LOADING':
            return {
                ...state,
                postLoading: true
            };
        case '@FOLDER/END_LOADING':
            return {
                ...state,
                postLoading: false
            };
        case '@FOLDER/END_LIST_FOLDER':
            return {
                ...state,
                posts: action.posts,
                hasMore: action.posts.length > 0
            };
        case '@FOLDER/END_LIST_MORE_FOLDER':
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                hasMore: action.posts.length > 0
            };
        case '@FOLDER/END_CREATE_FOLDER':
            var newPosts = state.posts.map(p => {
                return p;
            });
            return {
                ...state,
                posts: newPosts,
            };
        default:
            return state;
    }
}

/* Preview */
const initPreview = {
    currentPreview:'',
    previewList: [[{loved: true, URL: 'https://i.pinimg.com/564x/f3/6d/6d/f36d6d18240ccae47ad3932c9935ea2d.jpg', date: '2023 / 06 / 14', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8}, 
                   {loved: true, URL: 'https://i.pinimg.com/564x/8b/c3/50/8bc3508f9b6b2ae990b4b15b0ffe14bb.jpg', date: '2023 / 06 / 14', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8}, 
                   {loved: true, URL: 'https://i.pinimg.com/564x/8b/5d/88/8b5d883efedaae6db53519d5327ffb57.jpg', date: '2023 / 06 / 14', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8}],
                   [{loved: false, URL: 'https://i.pinimg.com/564x/8b/c3/50/8bc3508f9b6b2ae990b4b15b0ffe14bb.jpg', date: '2023 / 06 / 16', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8}, 
                   {loved: false, URL: 'https://i.pinimg.com/736x/04/94/86/04948650402abec7620dab8e458fdd37.jpg', date: '2023 / 06 / 16', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8}, 
                   {loved: false, URL: 'https://i.pinimg.com/564x/27/9c/9b/279c9bbdc613979ad32879cf5e5772e9.jpg', date: '2023 / 06 / 16', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8}], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    previewHasMore : true,
    previewLoading: false,
};


export function Preview(state = initPreview, action) {
    switch (action.type) {
        case '@PREVIEW/READ_TORED_PREVIEW':
            return {
                ...action.storedData
            }
        case '@PREVIEW/SET_CURRENTPREVIEW':
            return {
                ...state,
                currentPreview: action.url
        };
        case '@PREVIEW/DELETE_FAVORITE':
            var newFavorite = JSON.parse(JSON.stringify(state.previewList));
            for(j=0;j<newFavorite.length;j++){
                for(i = 0; i < newFavorite[j].length; i++){
                    if(newFavorite[j][i].URL == action.URL){
                        newFavorite[j][i].loved = false;
                    }
                }
            }
            
            for(i = 0; i < newFavorite[0].length; i++){
                if(newFavorite[0][i].URL == action.URL){
                    newFavorite[0].splice(i, 1);
                    break;
                }
            }
            return{
                ...state,
                previewList : newFavorite
            };

        case '@PREVIEW/ADD_FAVORITE':
            var newFavorite = JSON.parse(JSON.stringify(state.previewList));
            for(i = 0; i < newFavorite[action.folderId].length; i++){
                if(newFavorite[action.folderId][i].URL == action.URL){
                    newFavorite[action.folderId][i].loved = true;
                }
            }
            newFavorite[0].push({loved: true, URL: action.URL, date: '2023 / 06 / 14', scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: '#C6B8FF'});
            return{
                ...state,
                previewList: newFavorite
            };
            
        case '@PREVIEW/PUSH_PREVIEWLIST':
            var newPreviewList = JSON.parse(JSON.stringify(state.previewList));
            newPreviewList.push([]);
            return{
                ...state,
                previewList: newPreviewList
            };
        
        case '@PREVIEW/ADD_IMAGE_TO_FOLDER':
            var newPreviewList = JSON.parse(JSON.stringify(state.previewList));
            const DATE = new Date();
            var d = '';
            d += DATE.getFullYear();
            d += ' / ';
            d += DATE.getMonth() + 1;
            d += ' / ';
            d += DATE.getDate();
            //console.log('ADD_IMAGE_TO_FOLDER');
            newPreviewList[action.folderId].push({loved: false, URL: action.url, date: d, scale_Edit: 1, positionX_Edit: 0, positionY_Edit: 0, isFlipped_Edit: false, distance_Edit: 0, ColorValue_Edit: 8});
            //console.log('ADD_IMAGE_TO_FOLDER_DONE');
            return{
                ...state,
                previewList: newPreviewList
            };
        case '@PREVIEW/SET_EDIT_VALUE':
            var tempList = JSON.parse(JSON.stringify(state.previewList));
            for(var i = 0; i < tempList[action.folderId].length; i++){
                if(tempList[action.folderId][i].URL == action.url){
                    tempList[action.folderId][i].scale_Edit = action.scale;
                    tempList[action.folderId][i].positionX_Edit = action.positionX;
                    tempList[action.folderId][i].positionY_Edit = action.positionY;
                    tempList[action.folderId][i].isFlipped_Edit = action.isFlipped;
                    tempList[action.folderId][i].distance_Edit = action.distance;
                    tempList[action.folderId][i].ColorValue_Edit = action.bColor;
                }
            }
            return {
                ...state,
                previewList: tempList
            };
        case '@PREVIEW/END_LOADING':
            return {
                ...state,
                previewLoading: false
            };
        case '@PREVIEW/END_PREVIEW_POSTS':
            return {
                ...state,
                previewList: action.previewList,
                previewHasMore: action.previewList.length > 0
            };
        case '@PREVIEW/END_LIST_MORE_PREVIEWS':
            return {
                ...state,
                previewList: [...state.previewList, ...action.previewList],
                previewHasMore: action.previewList.length > 0
            };
        case '@PREVIEW/END_CREATE_PREVIEW':
            var newPreviews = state.previews.map(p => {
                return p;
            });
            return {
                ...state,
                previewList: newPreviews,
            };
        default:
            
            return state;
    }
}

/* Mode */
const initModeState = {
    isDarkMode: false,
    previewMode : 'Lock',
    folderLoaded : false,
    previewLoaded : false,
};


export function Mode(state = initModeState, action) {
    switch (action.type) {
        case '@MODE/SETDARKMODE':
            return {
                ...state,
                isDarkMode: action.isDarkMode,
                
            };
        case '@MODE/SETPREVIEWMODE':
            return {
                ...state,
                previewMode : action.previewMode,
            };
        case '@MODE/SET_FOLDER_LOAD':
            return{
                ...state,
                folderLoaded : true
            }
        case '@MODE/SET_PREVIEW_LOAD':
            return {
                ...state,
                previewLoaded : true
            }
        default:
            return state;
    }
}


