class MyDetect{

    //===========================================================================
    constructor(_settings){

        var parser = new UAParser(); //lib/utils/ua-parser.min.js
        this.uap = parser.getResult();

        this.is_mobile = false;
        this.is_android = false;
        this.is_ios = false;
        this.is_modern_ios = false;
        this.is_chrome = false;
        this.is_firefox = false;
        this.is_safari = false;
        this.is_oculus = false;
        this.is_mozillaxr = false;
        this.is_xr_ar = false;
        this.is_xr_vr = false;
        this.ios_version = undefined;
        this.typical_browsers = ["safari","chrome","firefox","edge"];
        this.is_typical_browser = false; //will be false if using an in-app browser or samsung browser or something else not in the list above

        this.detect_typical_browser();
        this.detect_mobile();
        this.detect_ios();
        this.detect_android();
        this.detect_firefox();
        this.detect_chrome();
        this.detect_safari();
        this.detect_oculus();
        this.detect_mozillaxr();
        this.detect_xr();

        if(_settings.debug){
            console.log("user agent:");
            console.log(navigator.userAgent.toLowerCase());
            console.log("vendor:");
            console.log(navigator.vendor.toLowerCase());
        }

        //crude speed test
        var NUMBER_OF_SPEED_TESTS = 2;
        if('speedtest' in _settings && 'speedtest_threshold' in _settings){
            this.speedtest_threshold = _settings.speedtest_threshold;
            if(_settings.speedtest){
                this.detect_speed(0,NUMBER_OF_SPEED_TESTS,(_lowest)=>{ //run two times
                    this.display_speed(_lowest);
                });
            }
        }

    }

    //===========================================================================
    detect_typical_browser(){
        var browser_name = this.uap.browser.name.toLowerCase();
        for(var i=0;i<this.typical_browsers.length;i++){
            if(browser_name.includes(this.typical_browsers[i])){
                this.is_typical_browser = true;
            }
        }
    }

    //===========================================================================
    detect_oculus(){
      this.is_oculus = /oculusbrowser/i.test(navigator.userAgent);
    }

    //===========================================================================
    detect_mobile(){
        this.is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    //===========================================================================
    detect_mozillaxr(){
        if(navigator.userAgent.toLowerCase().indexOf('webxrviewer') > -1){ this.is_mozillaxr = true; }
    }

    //===========================================================================
    detect_ios(){
        if(navigator.userAgent.toLowerCase().indexOf('iphone') > -1){ this.is_ios = true; }
        if(navigator.userAgent.toLowerCase().indexOf('ipad') > -1){ this.is_ios = true; }
        var ar_elem = document.createElement("a");
        this.is_modern_ios = ar_elem.relList.supports("ar"); 
        if(this.is_modern_ios){ 
            this.is_ios = true; 
            this.is_mobile = true; //modern iOS tricks into thinking is desktop 
        }
        this.ios_version = this.uap.os.version; 
    }

    //===========================================================================
    detect_android(){
        if(navigator.userAgent.toLowerCase().indexOf('android') > -1){ this.is_android = true; }
    }

    //===========================================================================
    detect_firefox(){
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){ this.is_firefox = true; }
    }

    //===========================================================================
    detect_safari(){
        if(navigator.userAgent.toLowerCase().indexOf('safari') > -1){ this.is_safari = true; }
        if(this.is_chrome){ this.is_safari = false; }
    }

    //===========================================================================
    detect_chrome(){
        if(navigator.userAgent.toLowerCase().indexOf('chrome')>-1 && navigator.vendor.toLowerCase().indexOf('google')>-1){ this.is_chrome = true; }
        if(navigator.userAgent.toLowerCase().indexOf('crios')>-1){ this.is_chrome = true; }
    }

    //===========================================================================
    detect_xr(){
        if ( 'xr' in navigator ) {
            navigator.xr.isSessionSupported( 'immersive-vr' ).then( ( supported ) => {
                supported ? this.is_xr_vr=true : this.is_xr_vr=false;
            } );
            navigator.xr.isSessionSupported( 'immersive-ar' ).then( ( supported ) => {
                supported ? this.is_xr_ar=true : this.is_xr_ar=false;
            } );
        }
    }

    //===========================================================================
    detect_speed(_i,_count,_cb){
        var lowest_speed = Infinity;
        var imageAddr = "img/speed_test_img.jpg"+"?r="+Math.floor(Math.random()*99999999);
        var startTime, endTime;
        var downloadSize = 610065; //~600kb
        var download = new Image();
        download.onload = ()=>{
            endTime = (new Date()).getTime();
            var duration = (endTime - startTime) / 1000; //Math.round()
            var bitsLoaded = downloadSize * 8;
            var speedBps = (bitsLoaded / duration).toFixed(2);
            var speedKbps = (speedBps / 1024).toFixed(2);
            var speedMbps = (speedKbps / 1024).toFixed(2);
            var speed = {
                b: speedBps,
                kb: speedKbps,
                mb: speedMbps
            };
            if(speed.mb < lowest_speed){
                lowest_speed = speed.mb;
            }
            _i++;
            if(_i>=_count){
                _cb(lowest_speed);
            }else{
                this.detect_speed(_i,_count,_cb); //next
            }
        }
        startTime = (new Date()).getTime();
        download.src = imageAddr;
    }

    //===========================================================================
    display_speed(_lowestspeed){
        if(_lowestspeed<this.speedtest_threshold){
            $("#ar_button").hide();
            $("#slower_internet").show();
            var mb = Math.floor(_lowestspeed);
            $("#internet_speed").html(mb+".MBPS");
        }else{
            $("#ar_button").show();
        }
        $("#slower_okay").click(()=>{
            $("#ar_button").show();
            $("#slower_internet").hide();
        });
    }

}
