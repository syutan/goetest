window.__require=function e(n,t,i){function a(o,r){if(!t[o]){if(!n[o]){var s=o.split("/");if(s=s[s.length-1],!n[s]){var l="function"==typeof __require&&__require;if(!r&&l)return l(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+o+"'")}o=s}var u=t[o]={exports:{}};n[o][0].call(u.exports,function(e){return a(n[o][1][e]||e)},u,u.exports,e,n,t,i)}return t[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<i.length;o++)a(i[o]);return a}({Building:[function(e,n,t){"use strict";cc._RF.push(n,"894e4Mf1IRO1pkrzFSlIO5P","Building"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){var e,n=[{id:0,name:"building1",money:35,carbon:10},{id:1,name:"building2",money:65,carbon:120}];return{get current(){return e},set current(t){e=n[t]},get name(){return e.name},get money(){return e.money},get carbon(){return e.carbon}}}return{getInstance:function(){return e||(e=n()),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],Event:[function(e,n,t){"use strict";cc._RF.push(n,"f0b2e25cWdPv45MNgFC/t4Y","Event"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){var e=-1,n=null,t=[];return cc.loader.loadRes("json/RandomEvent.json",function(e,t){e?console.log(e):n=t.json}),{get currentIndex(){return e},get currentEvent(){return n[e]},get length(){return n.length},resetData:function(){t=[]},randomEvent:function(){if(cc.log("randomEvent()"),n.length<1)return cc.log("No Events Anymore"),null;e=-1,cc.log("used.length=",t.length),cc.log(t),cc.log("events.length=",n.length),cc.log(n);for(var i=0;t.length<n.length&&(e=this.random(0,n.length-1),cc.log(e),!(e>-1&&-1==t.indexOf(e)));)if(++i>1e4){e=-1,cc.log("i>10000 currenindex=",e);break}return-1==e?(cc.log("cant not get currentIndex"),null):(cc.log("currentIndex=",e),-1==t.indexOf(e)&&t.push(e),n[e])},random:function(e,n){return Math.floor(Math.random()*(n-e+1)+e)}}}return{getInstance:function(){return e||(e=n()),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],GLOBAL:[function(e,n,t){"use strict";cc._RF.push(n,"7ca2cFaS/tHjLG7cGx5FWig","GLOBAL"),window.PATHS={CANVAS:"Canvas",START_PAGE:"Canvas/StartPage",MAIN_PAGE:"Canvas/MainPage",CREATE_USER_PAGE:"Canvas/CreateUserPage",CONTAINER:"Canvas/MainPage/container",GROUND_PANEL:"Canvas/MainPage/ui_pic_map_bg/GroundPanel",BUILDING_PANEL:"Canvas/MainPage/ui_pic_map_bg/BuildingPanel",RESULT_PANEL:"Canvas/MainPage/ui_pic_map_bg/ResultPanel",TOP_UI_PANEL:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg",USERCREATE_PANEL:"Canvas/CreateUserPage/create_user",INTRO_PANEL:"Canvas/CreateUserPage/intro",E_UP_ARROW:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/environment/arrows/ui_icon_arrow_up",E_DOWN_ARROW:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/environment/arrows/ui_icon_arrow_down",F_UP_ARROW:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/financial/arrows/ui_icon_arrow_up",F_DOWN_ARROW:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/financial/arrows/ui_icon_arrow_down",S_UP_ARROW:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/population/arrows/ui_icon_arrow_up",S_DOWN_ARROW:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/population/arrows/ui_icon_arrow_down",EVENT_PANEL:"Canvas/MainPage/ui_pic_map_bg/EventPanel",E_BTN_YES:"Canvas/MainPage/ui_pic_map_bg/EventPanel/btn_Yes",E_BTN_YES_LB:"Canvas/MainPage/ui_pic_map_bg/EventPanel/btn_Yes/Label",E_BTN_NO:"Canvas/MainPage/ui_pic_map_bg/EventPanel/btn_No",E_BTN_NO_LB:"Canvas/MainPage/ui_pic_map_bg/EventPanel/btn_No/Label",EVENT_TITLE:"Canvas/MainPage/ui_pic_map_bg/EventPanel/ui_question_title_bg/title",EVENT_CONTENT:"Canvas/MainPage/ui_pic_map_bg/EventPanel/content",EVENT_CHARACTER:"Canvas/MainPage/ui_pic_map_bg/EventPanel/ui_icon_headshot_bg/ui_icon_headshot01",QUESTION_PANEL:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel",Q_BTN_YES:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/btn_Yes",Q_BTN_YES_LB:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/btn_Yes/Label",Q_BTN_NO:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/btn_No",Q_BTN_NO_LB:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/btn_No/Label",QUESTION_TITLE:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/ui_question_title_bg/title",QUESTION_CONTENT:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/content",QUESTION_CHARACTER:"Canvas/MainPage/ui_pic_map_bg/QuestionPanel/ui_icon_headshot_bg/ui_icon_headshot01",LBL_FINANCIAL:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/financial/financial_label",LBL_POPULATION:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/population/population_label",LBL_ENVIRONMENT:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/environment/environment_label",LBL_MONTH:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/lbl_month",LBL_YEAR:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/lbl_year",LBL_LEAD_YEARS:"Canvas/MainPage/ui_pic_map_bg/ResultPanel/lbl_lead_years",LBL_LEAD_TITLE:"Canvas/MainPage/ui_pic_map_bg/ResultPanel/title",BTN_PLAY_AGAIN:"Canvas/MainPage/ui_pic_map_bg/ResultPanel/btn_play_again",FILL_BG_FINANCIAL:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/financial/bg_financial/fill_bg_financial",FILL_BG_SOCIETY:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/population/bg_society/fill_bg_society",FILL_BG_ENVIRONMENT:"Canvas/MainPage/ui_pic_map_bg/ui_frame_main_bg/environment/bg_environment/fill_bg_environment",BTN_BUILD_WITH_MONEY:"Canvas/MainPage/ui_pic_map_bg/BuildPanel/building1/build_with_money",BTN_BUILD_FREE:"Canvas/MainPage/ui_pic_map_bg/BuildPanel/building2/build_free",EB_NICKNAME:"Canvas/CreateUserPage/create_user/eb_nickname",EB_CODE:"Canvas/CreateUserPage/create_user/eb_code"},window.TURN={Q:"question",E:"event"},cc._RF.pop()},{}],GameManager:[function(e,n,t){"use strict";cc._RF.push(n,"49552Wb4HtEEIBgJfOWAjIr","GameManager"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){cc.log("GameManager.init()");var e=3e3,n=3e3,t=3e3,i=0,a=0,c=["0","1","2","3","4","5","6","7","8","9","10","11"],o=!1,r=-1;return{get maxEnvironment(){return 5e3},get maxFinancial(){return 5e3},get maxSociety(){return 5e3},get environment(){return n},get financial(){return e},get society(){return t},get month(){return c[a]},get mthCounter(){return a},set mthCounter(e){a=e},get yrCounter(){return i},set yrCounter(e){i=e},get gameOver(){return o},set gameOver(e){o=e},get turn(){return turn},set turn(e){turn=e},get previousEventIndex(){return r},set previousEventIndex(e){r=e},resetData:function(){n=3e3,e=3e3,t=3e3,i=0,a=0,o=!1},updateEFS:function(i,a){var c,o,r;a?(c=this.calculateEnvironmentValue(i.Enviroment1),r=this.calculateFinancialValue(i.Financial1),o=this.calculateSocietyValue(i.Society1)):(c=this.calculateEnvironmentValue(i.Enviroment2),r=this.calculateFinancialValue(i.Financial2),o=this.calculateSocietyValue(i.Society2)),n+=c,e+=r,t+=o},buildWithMoney:function(){e-=300},checkGameOver:function(){(n<=10||t<=10||e<=10)&&(o=!0)},checkEFSLimits:function(){n<=5e3&&(n=5e3),e<=5e3&&(e=5e3),t<=5e3&&(t=5e3)},calculateSocietyValue:function(e){return parseInt(e)},calculateFinancialValue:function(e){return parseInt(e)},calculateEnvironmentValue:function(e){return parseInt(e)},newEventHappen:function(){return previousTurn!=turn}}}return{getInstance:function(){return e||(e=n()),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],KingTitle:[function(e,n,t){"use strict";cc._RF.push(n,"dcc7c8XRixHLYcYIjHrOVY4","KingTitle"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){cc.log("KingTitle.init()");var e=null,n=null;return cc.loader.loadRes("json/KingTitle.json",function(t,i){if(t)console.log(t);else{var a={},c={},o={};(e=i.json).forEach(function(e,n,t){var i=e.YearMin,r=e.Condition;1==r?a[i]=e:2==r?c[i]=e:3==r&&(o[i]=e)}),(n={})[1]=a,n[2]=c,n[3]=o}}),{get length(){return e.length},getByCondition:function(t,i){return cc.log("getByCondition(",t,",",i,")"),e.length<1?"No kingtitle data Anymore":n[i][t]}}}return{getInstance:function(){return e||(e=n()),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],Question:[function(e,n,t){"use strict";cc._RF.push(n,"6af0dP9gAlF8rz+BIE/9nwd","Question"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){var e;cc.log("Question.init()");var n=null;return cc.loader.loadRes("json/RandomQuestion.json",function(e,t){e?console.log(e):n=t.json}),{get currentIndex(){return e},get currentQuestion(){return n[e]},get length(){return n.length},randomQuestion:function(){if(n.length<1)return"No Questions Anymore";var t=this.random(0,n.length-1);return e=t,n[t]},random:function(e,n){return Math.floor(Math.random()*(n-e+1)+e)}}}return{getInstance:function(){return e||(e=n()),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],Round:[function(e,n,t){"use strict";cc._RF.push(n,"9596c5nWexPOZXuY1RBxv43","Round"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){var e=1,n=0;return{get currentRound(){return e},set currentRound(n){e=n},get currentPercentage(){return n},set currentPercentage(e){n=e},updateRound:function(){cc.log("Current Round=",e),this.calculatePercentage(),e++},calculatePercentage:function(){0==n?e%7==0&&(n+=50):n+=10,cc.log("m_currentPercentage=",n)},resetData:function(){e=1,n=0}}}return{getInstance:function(){return e||(e=n()),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],UIManager:[function(e,n,t){"use strict";cc._RF.push(n,"48e49X5RN5NE4tTFg16ccbA","UIManager");var i,a,c,o,r,s,l,u=e("./models/GameManager.js"),g=e("./models/Question.js"),_=e("./models/Event.js"),h=e("./models/Round.js"),d=e("./models/KingTitle.js"),f=e("./models/User.js");cc.Class({extends:cc.Component,properties:{grassLands:[cc.Node],buildings:[cc.Prefab],FinanceBuilds:[cc.Node],FinanceLvs:[cc.Integer],EnvironmentBuilds:[cc.Node],EnvironmentLvs:[cc.Integer],SocietyBuilds:[cc.Node],SocietyLvs:[cc.Integer],efsIcons:[cc.Prefab]},initComponents:function(){cc.log("UIManager.initComponents()"),this.canvas=cc.find(PATHS.CANVAS),this.startPage=cc.find(PATHS.START_PAGE),this.mainPage=cc.find(PATHS.MAIN_PAGE),this.createUserPage=cc.find(PATHS.CREATE_USER_PAGE),this.container=cc.find(PATHS.CONTAINER),this.buildingPanel=cc.find(PATHS.BUILDING_PANEL),this.questionPanel=cc.find(PATHS.QUESTION_PANEL),this.eventPanel=cc.find(PATHS.EVENT_PANEL),this.resultPanel=cc.find(PATHS.RESULT_PANEL),this.topUIPanel=cc.find(PATHS.TOP_UI_PANEL),this.usercreatePanel=cc.find(PATHS.USERCREATE_PANEL),this.introPanel=cc.find(PATHS.INTRO_PANEL),this.fillBgSociety=cc.find(PATHS.FILL_BG_SOCIETY).getComponent(cc.Sprite),this.fillBgFinancial=cc.find(PATHS.FILL_BG_FINANCIAL).getComponent(cc.Sprite),this.fillBgEnvironment=cc.find(PATHS.FILL_BG_ENVIRONMENT).getComponent(cc.Sprite),this.eUpArrow=cc.find(PATHS.E_UP_ARROW).getComponent(cc.Sprite),this.eDownArrow=cc.find(PATHS.E_DOWN_ARROW).getComponent(cc.Sprite),this.fUpArrow=cc.find(PATHS.F_UP_ARROW).getComponent(cc.Sprite),this.fDownArrow=cc.find(PATHS.F_DOWN_ARROW).getComponent(cc.Sprite),this.sUpArrow=cc.find(PATHS.S_UP_ARROW).getComponent(cc.Sprite),this.sDownArrow=cc.find(PATHS.S_DOWN_ARROW).getComponent(cc.Sprite),this.lblMonth=cc.find(PATHS.LBL_MONTH).getComponent(cc.Label),this.lblYear=cc.find(PATHS.LBL_YEAR).getComponent(cc.Label),this.questionTitle=cc.find(PATHS.QUESTION_TITLE).getComponent(cc.Label),this.questionContent=cc.find(PATHS.QUESTION_CONTENT).getComponent(cc.Label),this.questionCharacter=cc.find(PATHS.QUESTION_CHARACTER).getComponent(cc.Sprite),this.eventTitle=cc.find(PATHS.EVENT_TITLE).getComponent(cc.Label),this.eventContent=cc.find(PATHS.EVENT_CONTENT).getComponent(cc.Label),this.eventCharacter=cc.find(PATHS.EVENT_CHARACTER).getComponent(cc.Sprite),this.lblLeadYears=cc.find(PATHS.LBL_LEAD_YEARS).getComponent(cc.RichText),this.lbKingTitle=cc.find(PATHS.LBL_LEAD_TITLE).getComponent(cc.RichText),this.btnQuestionYes=cc.find(PATHS.Q_BTN_YES),this.btnQuestionYes.on("click",this.clickedQuestionYes,this),this.btnQuestionYeslb=cc.find(PATHS.Q_BTN_YES_LB).getComponent(cc.Label),this.btnQuestionNo=cc.find(PATHS.Q_BTN_NO),this.btnQuestionNo.on("click",this.clickedQuestionNo,this),this.btnQuestionNolb=cc.find(PATHS.Q_BTN_NO_LB).getComponent(cc.Label),this.btnEventYes=cc.find(PATHS.E_BTN_YES),this.btnEventYes.on("click",this.clickedEventYes,this),this.btnEventYeslb=cc.find(PATHS.E_BTN_YES_LB).getComponent(cc.Label),this.btnEventNo=cc.find(PATHS.E_BTN_NO),this.btnEventNo.on("click",this.clickedEventNo,this),this.btnEventNolb=cc.find(PATHS.E_BTN_NO_LB).getComponent(cc.Label),this.btnPlayAgain=cc.find(PATHS.BTN_PLAY_AGAIN),this.btnPlayAgain.on("click",this.restartGame,this),this.ebNickname=cc.find(PATHS.EB_NICKNAME).getComponent(cc.EditBox),this.ebCode=cc.find(PATHS.EB_CODE).getComponent(cc.EditBox)},initData:function(){cc.log("initData()"),this.timer=0,this.eUpArrow.node.active=!1,this.eDownArrow.node.active=!1,this.fUpArrow.node.active=!1,this.fDownArrow.node.active=!1,this.sUpArrow.node.active=!1,this.sDownArrow.node.active=!1},initEmptyLands:function(){cc.log("initEmptyLands()"),this.emptyGrassLands=new Array(this.grassLands.length);for(var e=0;e<this.grassLands.length;e++)this.emptyGrassLands[e]=!0},onLoad:function(){cc.log("onLoad()"),this.initComponents(),this.initData(),this.initEmptyLands()},start:function(){l=this,this.restartGame()},goToGame:function(){cc.log("goToGame()"),this.startPage.active=!1;var e;null==(e=f.getData())?(cc.log("show create user intro"),this.goToUserIntro()):cc.log("Hello !!",e.nickname),this.mainPage.active=!0},goToUserIntro:function(){cc.log("goToUserIntro()"),this.createUserPage.active=!0,this.usercreatePanel.active=!1,this.introPanel.active=!0},goToUserCreate:function(){cc.log("goToUserCreate()"),this.createUserPage.active=!0,this.usercreatePanel.active=!0,this.introPanel.active=!1},doCreateUser:function(){if(this.createUserPage.active=!1,cc.log("doCreateUser()"),null==f.getData()){var e={nickname:"",gender:0,code:""};e.nickname=this.ebNickname.string,e.code=this.ebCode.string,f.doCreateData(e)?this.goToGame():this.goToUserIntro()}else this.goToGame()},restartGame:function(){cc.log("restartGame()"),this.deleteAllBuildings(),this.startPage.active=!0,this.mainPage.active=!1,this.topUIPanel.active=!0,this.closeAllPanels(),u.resetData(),h.resetData(),_.resetData(),this.initData(),this.resetEFS(),this.hideArraws(),this.lblMonth.string=u.month,this.lblYear.string=u.yrCounter,this.container.active=!0,this.container.removeAllChildren(!0),this.showTimer()},resetEFS:function(){var e=u.environment/u.maxEnvironment,n=u.financial/u.maxFinancial,t=u.society/u.maxSociety;this.fillBgEnvironment.fillRange=e,this.fillBgFinancial.fillRange=n,this.fillBgSociety.fillRange=t,i=e,a=n,c=t,o=e,r=n,s=t},updateFillValuesEFS:function(){cc.log("updateFillValuesEFS()"),i=this.fillBgEnvironment.fillRange,a=this.fillBgFinancial.fillRange,c=this.fillBgSociety.fillRange,o=u.environment/u.maxEnvironment,r=u.financial/u.maxFinancial,s=u.society/u.maxSociety,this.efillTimer=setInterval(l.eFillValue,5),this.ffillTimer=setInterval(l.fFillValue,5),this.sfillTimer=setInterval(l.sFillValue,5),this.updateArrows(),this.AnimateEFSIcons()},updateArrows:function(){this.hideArraws(),o>i?(this.eUpArrow.node.active=!0,this.eDownArrow.node.active=!1):o<i&&(this.eUpArrow.node.active=!1,this.eDownArrow.node.active=!0),r>a?(this.fUpArrow.node.active=!0,this.fDownArrow.node.active=!1):r<a&&(this.fUpArrow.node.active=!1,this.fDownArrow.node.active=!0),s>c?(this.sUpArrow.node.active=!0,this.sDownArrow.node.active=!1):s<c&&(this.sUpArrow.node.active=!1,this.sDownArrow.node.active=!0)},eFillValue:function(){if(o!=i){var e=o-i;Math.abs(e)<.003?(l.fillBgEnvironment.fillRange=o,clearInterval(l.efillTimer)):e>0?l.fillBgEnvironment.fillRange+=.003:l.fillBgEnvironment.fillRange-=.003,l.fillBgEnvironment.fillRange<=0&&(console.log("---E---"+l.fillBgEnvironment.fillRange),u.gameOver=!0,l.gameOver()),i=l.fillBgEnvironment.fillRange}else clearInterval(l.efillTimer)},fFillValue:function(){if(r!=a){var e=r-a;Math.abs(e)<.003?(l.fillBgFinancial.fillRange=r,clearInterval(l.ffillTimer)):e>0?l.fillBgFinancial.fillRange+=.003:l.fillBgFinancial.fillRange-=.003,l.fillBgFinancial.fillRange<=0&&(console.log("---F---"+l.fillBgFinancial.fillRange),u.gameOver=!0,l.gameOver()),a=l.fillBgFinancial.fillRange}else clearInterval(l.ffillTimer)},sFillValue:function(){if(s!=c){var e=s-c;Math.abs(e)<.003?(l.fillBgSociety.fillRange=s,clearInterval(l.ffillTimer)):e>0?l.fillBgSociety.fillRange+=.003:l.fillBgSociety.fillRange-=.003,l.fillBgSociety.fillRange<=0&&(console.log("---S---"+l.fillBgSociety.fillRange),u.gameOver=!0,l.gameOver()),c=l.fillBgSociety.fillRange}else clearInterval(l.sfillTimer)},hideArraws:function(){this.eUpArrow.node.active=!1,this.eDownArrow.node.active=!1,this.fUpArrow.node.active=!1,this.fDownArrow.node.active=!1,this.sUpArrow.node.active=!1,this.sDownArrow.node.active=!1},createHouse:function(e){cc.log("createHouse()");var n=this.getRandomLandPosition();if(-1==n)u.gameOver=!0,this.gameOver();else{var t=this.grassLands[n].position,i=cc.instantiate(this.buildings[e]);i.position=t,i.setPosition(i.getPosition().x,i.getPosition().y+20),this.buildingPanel.addChild(i)}},tweening:function(e,n){cc.tween(e).to(3,{position:n},{easing:"backOut"}).call(function(){e.destroy()}).start()},getPostionInOtherNode:function(e,n){if(null==n.parent)return null;var t=n.parent.convertToWorldSpaceAR(n.getPosition());return e.convertToNodeSpaceAR(t)},getRandomLandPosition:function(){var e=-1;if(this.emptyGrassLands.length>0){var n=this.emptyGrassLands.length;e=this.random(0,n-1),this.emptyGrassLands.splice(e,1)}return e},showQuestionPanel:function(){if(!this.isExistShowingPanel()){cc.log("showQuestionPanel()"),this.currentQuestion=g.randomQuestion(),this.questionTitle.string=this.currentQuestion.QuestionTitle,this.questionContent.string=this.currentQuestion.QuestionContent;var e="images/"+this.currentQuestion.Character,n=this;cc.loader.loadRes(e,cc.SpriteFrame,function(e,t){null==e&&(n.questionCharacter.spriteFrame=t)}),this.btnQuestionYeslb.string=this.currentQuestion.YesText,this.btnQuestionNolb.string=this.currentQuestion.NoText,this.questionPanel.active=!0}},showEventPanel:function(){if(cc.log("showEventPanel()"),!this.isExistShowingPanel())if(this.currentEvent=_.randomEvent(),null!=this.currentEvent){this.eventTitle.string=this.currentEvent.QuestionTitle,this.eventContent.string=this.currentEvent.QuestionContent;var e="images/"+this.currentEvent.Character,n=this;cc.loader.loadRes(e,cc.SpriteFrame,function(e,t){null==e&&(n.questionCharacter.spriteFrame=t)}),this.btnEventYeslb.string=this.currentEvent.YesText,this.btnEventNolb.string=this.currentEvent.NoText,this.eventPanel.active=!0}else this.showQuestionPanel()},showResultPanel:function(){this.topUIPanel.active=!1;var e="";e=e.concat(u.yrCounter," \u5e74 ",u.mthCounter," \u6708 "),this.lblLeadYears.string=this.formatWithOutline(e,7);var n=u.yrCounter,t=u.environment,i=u.financial,a=u.society,c=0;t<=0?c=1:i<=0?c=2:a<=0&&(c=3);var o=d.getByCondition(n,c);this.lbKingTitle.string=this.formatWithOutline(o.TextContent,7),this.resultPanel.active=!0},formatWithOutline:function(e,n){return("<outline width="+n+" color=#1a7087>").concat(e,"</outline>")},AnimateEFSIcons:function(){var e=this.getPostionInOtherNode(this.canvas,this.questionPanel),n=this.getPostionInOtherNode(this.canvas,this.fillBgEnvironment.node),t=this.getPostionInOtherNode(this.canvas,this.fillBgFinancial.node),l=this.getPostionInOtherNode(this.canvas,this.fillBgSociety.node);if(o>i){var u=cc.instantiate(this.efsIcons[0]);u.position=e,this.container.addChild(u),this.tweening(u,n)}if(r>a){var g=cc.instantiate(this.efsIcons[1]);g.position=e,this.container.addChild(g),this.tweening(g,t)}if(s>c){var _=cc.instantiate(this.efsIcons[2]);_.position=e,this.container.addChild(_),this.tweening(_,l)}},clickedQuestionYes:function(){this.questionPanel.active=!1,u.updateEFS(g.currentQuestion,!0),this.updateFillValuesEFS()},clickedQuestionNo:function(){this.questionPanel.active=!1,u.updateEFS(g.currentQuestion,!1),this.updateFillValuesEFS()},clickedEventYes:function(){this.eventPanel.active=!1,u.updateEFS(_.currentEvent,!0),this.updateFillValuesEFS()},clickedEventNo:function(){this.eventPanel.active=!1,u.updateEFS(_.currentEvent,!1),this.updateFillValuesEFS()},updateYearAndMonth:function(){u.mthCounter++,u.mthCounter>11&&(u.mthCounter=0,u.yrCounter++,this.lblYear.string=u.yrCounter),this.lblMonth.string=u.month},random:function(e,n){var t=Math.random()*(n-e+1)+e;return Math.floor(t)},hideallCity:function(){cc.log("hideallCity()"),this.FinanceBuilds.forEach(function(e,n,t){e.active=!1}),this.EnvironmentBuilds.forEach(function(e,n,t){e.active=!1}),this.SocietyBuilds.forEach(function(e,n,t){e.active=!1})},displayCity:function(){cc.log("displayCity()"),this.hideallCity(),this.displayFinanceCity(),this.displayEnvironmentCity(),this.displaySocietyCity()},displayFinanceCity:function(){cc.log("displayFinanceCity()");var e=u.financial;cc.log("f=",e);if(this.FinanceLvs.length>0&&this.FinanceBuilds.length>0){var n=this;this.FinanceLvs.forEach(function(t,i,a){e>=t&&null!=n.FinanceBuilds[i]&&(n.FinanceBuilds[i].active=!0,cc.log("this.FinanceBuilds[",i,"]=true"))})}},displayEnvironmentCity:function(){cc.log("displayEnvironmentCity()");var e=u.environment;cc.log("f=",e);if(this.EnvironmentLvs.length>0&&this.EnvironmentBuilds.length>0){var n=this;this.EnvironmentLvs.forEach(function(t,i,a){e>=t&&null!=n.EnvironmentBuilds[i]&&(n.EnvironmentBuilds[i].active=!0,cc.log("this.EnvironmentBuilds[",i,"]=true"))})}},displaySocietyCity:function(){cc.log("displayCity()");var e=u.society;cc.log("f=",e);if(this.SocietyLvs.length>0&&this.SocietyBuilds.length>0){var n=this;this.SocietyLvs.forEach(function(t,i,a){e>=t&&null!=n.SocietyBuilds[i]&&(n.SocietyBuilds[i].active=!0,cc.log("this.SocietyBuilds[",i,"]=true"))})}},showTimer:function(){var e=this;cc.log("showTimer()");var n=setInterval(function(){if(u.gameOver)clearInterval(n);else{if(e.isExistShowingPanel())return;e.timer++,60==e.timer&&(e.timer=0),e.updateYearAndMonth(),h.updateRound(),e.displayCity(),e.emitRandomEAndQ(e.timer),cc.log("this.timer=",e.timer)}},500)},checkNextEventHappened:function(){u.newEventHappen()||-1==u.previousEventIndex?void 0!=this.currentEvent&&(u.previousEventIndex=g.currentIndex):u.updateEFS(_.currentEvent,!0)},emitRandomEAndQ:function(e){var n=this.random(0,100);h.currentPercentage>0&&n<=h.currentPercentage?(cc.log("random:",n,"<= ",h.currentPercentage),this.showEventPanel(),h.currentPercentage=0):(cc.log("random:",n," > ",h.currentPercentage),this.showQuestionPanel())},closeAllPanels:function(){this.questionPanel.active=!1,this.eventPanel.active=!1,this.resultPanel.active=!1,this.createUserPage.active=!1},gameOver:function(){this.closeAllPanels(),this.showResultPanel(),this.container.active=!1},deleteAllBuildings:function(){for(var e=this.buildingPanel.children,n=0;n<e.length;n++)e[n].destroy()},isExistShowingPanel:function(){var e=!1;return(u.gameOver||this.questionPanel.active||this.eventPanel.active)&&(e=!0),e}}),cc._RF.pop()},{"./models/Event.js":"Event","./models/GameManager.js":"GameManager","./models/KingTitle.js":"KingTitle","./models/Question.js":"Question","./models/Round.js":"Round","./models/User.js":"User"}],User:[function(e,n,t){"use strict";cc._RF.push(n,"c35f64Y2l9B5Jzu926l2nGz","User"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){var e;function n(){cc.log("User.init()");return{initData:function(){cc.log("User.initData()"),this.data=JSON.parse(cc.sys.localStorage.getItem("userData")),cc.log("User.data=",this.data)},getData:function(){return cc.log("User.getData()"),cc.log("this.data=",this.data),this.data},doCreateData:function(e){return cc.log("User.doCreateData(",e,")"),null==this.data&&(this.data=e,this.saveData(this.data)),!0},saveData:function(e){cc.sys.localStorage.setItem("userData",JSON.stringify(this.data))},loadData:function(){return this.data=JSON.parse(cc.sys.localStorage.getItem("userData")),this.data}}}return{getInstance:function(){return e||(e=n()),e.initData(),e}}}().getInstance();t.default=i,n.exports=t.default,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,n,t){"use strict";cc._RF.push(n,"cfd8fBeIblMz79yGFZ0t5KK","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["use_v2.1-2.2.1_cc.Toggle_event","GLOBAL","UIManager","Building","Event","GameManager","KingTitle","Question","Round","User"]);