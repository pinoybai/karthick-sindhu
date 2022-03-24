$('document').ready(function(){
    
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       console.log('Ready...');
     });
     
     $('#plug').click(function() {
       
       widget.isPaused(function(pause){
         
         if (pause == false){
           $('#plug > span').addClass('glyphicon-volume-off').removeClass('glyphicon-volume-up');
           widget.pause();
         }else{
           $('#plug > span').addClass('glyphicon-volume-up').removeClass('glyphicon-volume-off');
           widget.play();
         }
       });
       
     });
	
	$('#countdown_ticker').downCount({
            date: '02/16/2019 12:00:00',
            offset: +10
    });
    
    $('#go_to_top').on('click', function(){
        TweenMax.to(window, 10, {scrollTo: {y: 0}});
    });
	
	var click_icon = $('.click_icon');
	
	var boy_sprite_duration = (1/12)*(12-1); //12 fps and 12 frames
	var girl_sprite_duration = (1/10)*(10-1); //12 fps and 12 frames
	var boy_story_scene_1_ground = $('#boy-story-scene-1 .ground');
	var boy_story_scene_1_bush = $('#boy-story-scene-1 .bush');
	var boy_story_scene_1_sky = $('#boy-story-scene-1 .sky');
	var boy_story_scene_1_city = $('#boy-story-scene-1 .city');
	var boy_story_scene_1_main_character = $('#boy-story-scene-1 .main-character');
	var boy_story_scene_1_main_character_left_position = boy_story_scene_1_main_character.offset().left;
	var boy_story_scene_1_parents = $('#boy-story-scene-1 .parents');
	
	var boy_story_scene_1_building_1_pause_position = boy_story_scene_1_main_character_left_position - 350;
	var boy_story_scene_1_building_2_pause_position = boy_story_scene_1_main_character_left_position - 300;
	var boy_story_scene_1_building_3_pause_position = boy_story_scene_1_main_character_left_position - 350;
	
	var boy_story_scene_1_memory_building = $('#boy-story-scene-1 .memory-building-1');
	var boy_story_scene_1_memory_building_2 = $('#boy-story-scene-1 .memory-building-2');
	var boy_story_scene_1_memory_building_3 = $('#boy-story-scene-1 .memory-building-3');
	var boy_story_scene_1_school_memory_building_images = $('#boy-story-scene-1 .school-memories');
	var boy_story_scene_1_character_dialogue = $('#boy-story-scene-1 .character-dialogue');
	var boy_story_scene_1_character_dialogue_p = $('#boy-story-scene-1 .character-dialogue p');
	
	var boy_story_scene_1_college2_memory_building_images = $('#boy-story-scene-1 .college-2-memories');
	
	var boy_story_scene_1_school1_memory_building_images = $('#boy-story-scene-1 #slider-container');
	
	//info clouds
	var boy_story_scene_1_memory_building_1_info_cloud = $('#boy-story-scene-1 .memory-building-1 > .info-cloud');
	var boy_story_scene_1_memory_building_2_info_cloud = $('#boy-story-scene-1 .memory-building-2 > .info-cloud');
	
	//floating elements
	var boy_story_scene_1_parents_names = $('#boy-story-scene-1 .parents > p');
	var boy_story_scene_1_parachute = $('#boy-story-scene-1 .parachute');
	
	//girl snippet variables
	var girl_story_scene_1_ground = $('#girl-story-scene-1 .ground');
	var girl_story_scene_1_bush = $('#girl-story-scene-1 .bush');
	var girl_story_scene_1_sky = $('#girl-story-scene-1 .sky');
	var girl_story_scene_1_city = $('#girl-story-scene-1 .city');
	var girl_story_scene_1_main_character = $('#girl-story-scene-1 .main-character');
	var girl_story_scene_1_main_character_left_position = girl_story_scene_1_main_character.offset().left;
	var girl_story_scene_1_parents = $('#girl-story-scene-1 .parents');
	
	var girl_story_scene_1_building_1_pause_position = girl_story_scene_1_main_character_left_position - 150;
	var girl_story_scene_1_building_2_pause_position = girl_story_scene_1_main_character_left_position - 100;
	
	var girl_story_scene_1_memory_building = $('#girl-story-scene-1 .memory-building-1');
	var girl_story_scene_1_memory_building_2 = $('#girl-story-scene-1 .memory-building-2');
	
	var girl_story_scene_1_school_memory_building_images = $('#girl-story-scene-1 .school-memories');
	var girl_story_scene_1_character_dialogue = $('#girl-story-scene-1 .character-dialogue');
	var girl_story_scene_1_character_dialogue_p = $('#girl-story-scene-1 .character-dialogue p');
	
	var girl_story_scene_1_college2_memory_building_images = $('#girl-story-scene-1 .college-2-memories');
	
	
	//info clouds
	var girl_story_scene_1_memory_building_1_info_cloud = $('#girl-story-scene-1 .memory-building-1 > .info-cloud');
	
	//floating elements
	var girl_story_scene_1_parents_names = $('#girl-story-scene-1 .parents > p');
	var girl_story_scene_1_barrage = $('#girl-story-scene-1 .barrage');
	
	//met proposal snippet variables
	var met_proposal_scene_1_character_dialogue = $('#met_proposal-story-scene-1 > .company_building > .company_main_characters > .character-dialogue');
	var met_proposal_scene_1_character_dialogue_p = $('#met_proposal-story-scene-1 > .company_building > .company_main_characters > .character-dialogue p');
	
	var met_proposal_scene_1_company_main_characters = $('#met_proposal-story-scene-1 > .company_building > .company_main_characters');
	var met_proposal_scene_1_company_slideshow_div = $('#met_proposal-story-scene-1 > .company_building > .company_image_slideshow');
	var met_proposal_scene_1_company_slideshow_div_ul = $('.company_image_slideshow > ul');
	
	var met_proposal_scene_1_office_room = $('#met_proposal-story-scene-1 > .office_room');
	
	var met_proposal_scene_1_image_list_company_building = $('#met_proposal-story-scene-1 > .company_building > .company_image_slideshow > ul > li');
	var met_proposal_scene_1_image_list_company_building_last_child_width = $('#met_proposal-story-scene-1 > .company_building > .company_image_slideshow > ul > li:last-child').width();
	
	
	var met_proposal_scene_1_company_slideshow_images_width = 0;

	met_proposal_scene_1_image_list_company_building.each(function() {
		met_proposal_scene_1_company_slideshow_images_width += $(this).width();
	});
	
	var met_proposal_scene_1_company_building_slideshow_stop_position = 1050; //met_proposal_scene_1_company_slideshow_images_width - met_proposal_scene_1_image_list_company_building_last_child_width;
	
	//subscribe vars
	
	var couple_image_wedding_timer = $('#bottom_wedding_timer_cover > .couple_image_wedding_timer');
	var marriage_invite_button = $('#bottom_wedding_timer_cover > .marriage_invite_button');
	
	var window_width = $(window).width();
	
	window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
	isFirefox = /firefox/i.test(navigator.userAgent.toLowerCase());
	
	function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
	
	window.addEventListener("orientationchange", function() {
		location.reload();
	});
	
	if(window.isMobile && isFirefox){
	    $('#preloader_wrap').css('display','none');
	    $('#firefox_mobile').css('display','block');
	    return;
	}
	
	
	if(window.isMobile && getMobileOperatingSystem() == 'iOS'){
	  $('.subscribe_reminder_button_link', '#bottom_wedding_timer_cover').on('click', function(e){
	        e.preventDefault();
	        alert('Browser notifications are not yet supported in IOS devices, our developers are working on better alternative.');   
	    });
	}
	
	
	$("body").niceScroll({
    cursorcolor: "#fff",
    cursorwidth: "10px",
    scrollspeed: 10,
    mousescrollstep: 10,
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorborderradius: "5px",
    background: "rgba(92, 92, 92, 0.68)"
    });
	

	$(window).on('load', function(){
	    
	   TweenMax.to('#plug_music_indicator', 0.5, {autoAlpha: 1, repeat: 5, yoyo: true}, 0.5);
	 
	    $('#preloader_wrap').fadeOut("slow");
		
		var window_height = $(window).height();
	
			$('.scene').css({
				height: window_height+'px'
			});
	
	});
	
	if (window.matchMedia("(orientation: landscape)").matches && window.isMobile) {
	
			var girl_info_cloud_top_from = 20;
			var girl_info_cloud_top_to = 0;
		
			var boy_info_cloud_top_from = 20;
			var boy_info_cloud_top_to = 15;
		
			var college_boy_info_cloud_from = 50;
			var college_boy_info_cloud_to = 70;
		
			var company_main_characters_bottom = -110;
			
	TweenMax.set([boy_story_scene_1_memory_building_2_info_cloud, boy_story_scene_1_memory_building_1_info_cloud], {left: '-100px', fontSize: '9px',width: '210px'});
	TweenMax.set(girl_story_scene_1_memory_building_1_info_cloud, {left: '345px', fontSize: '9px',width: '210px'});
	TweenMax.set('#boy-story-scene-1 > .memory-building-3 > .college-2-memories > .booklet', {marginTop: '180px'});

		
	} else {
		var girl_info_cloud_top_from = 50;
		var girl_info_cloud_top_to = -150;
		
		var boy_info_cloud_top_from = 50;
		var boy_info_cloud_top_to = -150;
		
		var college_boy_info_cloud_from = 50;
		var college_boy_info_cloud_to = -98;
		
		var company_main_characters_bottom = -60;
	}
	
function zindex_set_up(element){
  TweenMax.set(element, {zIndex: 1});
  TweenMax.set(element.prev(), {zIndex: 0});
  TweenMax.set(element.prev().prevAll(), {zIndex: -1});
}

function hide_image($this_image){
    
    $this_image.addClass('folded');
    $this_image.removeClass('current_image');
    $this_image.prev().addClass('current_image');
    
    var current_image = $('.current_image');
  var last_z_index = - $('#boy-story-scene-1 #slider-container').find('.image').length;
    TweenMax.set($this_image, {zIndex: last_z_index, onComplete: zindex_set_up, onCompleteParams:[current_image]});
    
}


TweenMax.staggerFromTo([boy_story_scene_1_parents_names, girl_story_scene_1_parents_names], 1, {top: -60}, {top: -50, repeat: -1, yoyo: true}, 0.5);
TweenMax.staggerFromTo(boy_story_scene_1_parachute, 1, {top: -5}, {top: 0, repeat: -1, yoyo: true}, 0.5);
TweenMax.staggerFromTo(girl_story_scene_1_barrage, 80, {left: -200}, {left: window_width + 200, repeat: -1, ease: Linear.easeNone}, 20);
TweenMax.fromTo('.indicate_scroll', 1, {top: 10}, {top: 0, repeat: -1, yoyo: true}, 0.5);
TweenMax.fromTo('.invite_scroll_down_message > span', 1, {autoAlpha: 0, top: 10}, {autoAlpha: 1, top: 0, repeat: -1, yoyo: true}, 0.5);
TweenMax.fromTo(click_icon, 1, {scale: 0.8}, {scale: 1, repeat: -1, yoyo: true}, 0.5);

//click indicator

//var finger = $('#finger');
var finger = ['#boy_finger, #girl_finger'];
var click_effect = ['#boy_click_effect, #girl_click_effect'];

var tl = new TimelineMax({repeat: -1, yoyo:false});

tl.to(finger, 0.4, {
            x: -21,
            y: 20,
            delay: 0.7
        })
        .to({
            fake: 0
        }, 0.3, {
            fake: 30
        })
        .to(click_effect, 0.01,{
            autoAlpha: 1
        })
        .to(finger, 0.7, {
            x: 0,
            y: 0
        }, 1.3);
	
//Animations linked to scroll starts here
	var master_tl = new TimelineMax({
		paused: true
	});
	
	var girl_story_1_tl = new TimelineMax({
		paused: true
	});
	
	var met_proposal_story_1_tl = new TimelineMax({
		paused: true
	});
	
	var reminder_subscribe_story_1_tl = new TimelineMax({
		paused: true
	});
	
	
function reminder_subscribe_story_1(){
	var tl = new TimelineMax({id: "reminder subscribe story 1"});
	
	tl
		.fromTo(couple_image_wedding_timer, 1, {autoAlpha: 0, rotation: '10'},{autoAlpha: 1, rotation: '-10'})
		.fromTo(marriage_invite_button, 1, {autoAlpha: 0, rotation: '-6'},{autoAlpha: 1, rotation: '6'}, '-=0.5')
		
	return tl;
}
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////met proposal functions/////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
function met_proposal_story_1_company(){
	var tl = new TimelineMax({id: "company met proposal scene 1 initial"});
	
	tl
		.to(met_proposal_scene_1_company_main_characters, 2, {bottom: company_main_characters_bottom, ease: Linear.easeNone}, '+=2')
		.fromTo(met_proposal_scene_1_character_dialogue, 10, {scale: 0,autoAlpha: 0, rotation: '50'},{scale: 1, autoAlpha: 1, rotation: '0', top: '-100px', left: '38px'}, '+=5')
		.to(met_proposal_scene_1_company_slideshow_div, 10, {autoAlpha: 1}, '+=10')
		.to(met_proposal_scene_1_character_dialogue, 5, {scale: 0,autoAlpha: 0, rotation: '50'}, '-=2')
		.to(met_proposal_scene_1_company_slideshow_div_ul, 35, {marginLeft: - met_proposal_scene_1_company_building_slideshow_stop_position, ease: Linear.easeNone}, '+=1');
		
	return tl;
}

var shotDescriptionPos = window.innerWidth < 737 ? '-20px' : '-40px';

function met_proposal_story_1_office_room(){
	var tl = new TimelineMax({id: "office room met proposal scene 1 initial"});
	
	tl
		.to(met_proposal_scene_1_office_room, 10, {top: 0, ease: Linear.easeNone})
		.fromTo(['#hearts_group #heart_2', '#hearts_group #heart_1'], 8, {scale: 1, transformOrigin: 'bottom center'},{scale: 4, transformOrigin: 'bottom center', repeat: 3, yoyo: true}, '+=1')
		.fromTo('#met_proposal-scene-1-svg_description', 5, {autoAlpha: 0, marginTop: '0px'},{autoAlpha: 1, marginTop: shotDescriptionPos}, 8)
		.fromTo('#met_proposal-scene-1-svg_description > .normal_shot_desc', 20, {autoAlpha: 0, marginLeft: '-50'} ,{autoAlpha: 1, marginLeft: 0, display: 'block', ease:Linear.easeNone}, 10)
		.to('#office_scene', 5, {x: -400}, '+=1')
		.to('#met_proposal-story-scene-1 > .office_room', 1,{backgroundColor: "#f3f9cd"}, '-=0.5')
		.to('#boy_parents_things', 5, {x: 0}, '+=1')
		.to('#girl_parents_things', 5, {x: 0}, '+=1')
		.to('#decor_table', 5, {y: 0}, '+=1')
		.to('#met_proposal-scene-1-svg_description > .normal_shot_desc', 10, {autoAlpha: 0, marginLeft: '30', display: 'none', ease:Linear.easeNone}, '-=20')
		.fromTo('#met_proposal-scene-1-svg_description > .normal_shot_desc2, #met_proposal-scene-1-svg_description > .highlighted_shot_desc', 10, {autoAlpha: 0, marginLeft: '-50'} ,{autoAlpha: 1, marginLeft: 0, display: 'block', ease:Linear.easeNone}, '-=5')
		.to('#met_proposal-scene-1-svg_description', 5, {autoAlpha: 0, marginTop: '0px'}, '+=5');
		
	return tl;
}

	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////girl story functions/////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////

function girl_story_1_scene_1_initial(){
	var tl = new TimelineMax({id: "scene 1 initial"});
	
	tl
		.fromTo(girl_story_scene_1_character_dialogue, 5, {autoAlpha: 0},{autoAlpha:1, top: '+=5'})
		.to(girl_story_scene_1_character_dialogue, 5, {autoAlpha: 0, top: '-=10'}, '+=5');
		
	return tl;
}
	
function girl_story_1_baby_to_school(){
	var tl = new TimelineMax({id: "baby to school"});
	
	tl
		.fromTo(girl_story_scene_1_main_character, 1, {backgroundPosition: '0px 0px'},{repeat: 20, backgroundPosition: '900px 0px', ease: SteppedEase.config(6)}, 0.5)
		.from(girl_story_scene_1_ground, 30, {backgroundPosition: '100% 0px', ease: Linear.easeNone}, 0.5)
		.from(girl_story_scene_1_bush, 30, {backgroundPosition: '800px 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(girl_story_scene_1_city, 30, {backgroundPosition: '0% 0px'},{backgroundPosition: '-4% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(girl_story_scene_1_sky, 30, {backgroundPosition: '0% 0px'},{backgroundPosition: '2% 0px', ease: Linear.easeNone}, 0.5)
		.to(girl_story_scene_1_parents, 3, {left: '-250px'}, '-=30')
		.to(girl_story_scene_1_memory_building, 30, {left: girl_story_scene_1_building_1_pause_position}, 1);
		
	return tl;
}

function girl_story_1_bring_in_pfold(){
	var tl = new TimelineMax({id: "baby to school"});
	
	tl
		
		.fromTo(girl_story_scene_1_school_memory_building_images, 6, {scale: 0 ,autoAlpha: 0, rotation: "0"}, {scale: 1, autoAlpha: 1, rotation: "350"}, '-=10')
		
		.fromTo(girl_story_scene_1_memory_building_1_info_cloud, 4,{autoAlpha: 0, top: girl_info_cloud_top_from},{autoAlpha: 1, top: girl_info_cloud_top_to}, '-=2')
		
		.to(girl_story_scene_1_school_memory_building_images, 4, {scale: 0, autoAlpha: 0, rotation: "0"}, '+=15')
		
		.set(girl_story_scene_1_main_character, {bottom: 20,backgroundImage: 'url(img/college-girl-sprite.png)'})
		
		.to(girl_story_scene_1_memory_building_1_info_cloud, 2,{autoAlpha: 0, top: 20}, '-=12');
	
	return tl;
}

/*
 Baby stage, baby goes to school and tehn school memories played ends
*/

/*
 kid goes to college and then college memories played
*/

function girl_story_1_kid_to_college(){
	var tl = new TimelineMax({id: "kid to college"});
	
	tl
		.from(girl_story_scene_1_main_character, girl_sprite_duration, {repeat: 50, backgroundPosition: '1500px 0px', ease: SteppedEase.config(10)})

		.to(girl_story_scene_1_memory_building, 20, {left: '-500px'}, 0.5)
		.from(girl_story_scene_1_ground, 30, {backgroundPosition: '500% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(girl_story_scene_1_bush, 30, {backgroundPosition: '0px 0px'},{backgroundPosition: '-800px 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(girl_story_scene_1_city, 30, {backgroundPosition: '-4% 0px'},{backgroundPosition: '-8% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(girl_story_scene_1_sky, 30, {backgroundPosition: '2% 0px'} , {backgroundPosition: '4% 0px', ease: Linear.easeNone}, 0.5)
		.to(girl_story_scene_1_memory_building_2, 30, {left: girl_story_scene_1_building_2_pause_position}, 0.5)
		
		.from(girl_story_scene_1_college2_memory_building_images, 5, {rotation: "-10"}, '-=10')
		.to(girl_story_scene_1_college2_memory_building_images, 5, {autoAlpha: 1}, '-=10')
		.to(girl_story_scene_1_college2_memory_building_images, 10, {autoAlpha: 0, rotation: "-10"}, '+=2')
		
	return tl;
}
	
	
	//////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	

/*
 Baby stage, baby goes to school and tehn school memories played starts
*/

function scene_1_initial(){
	var tl = new TimelineMax({id: "scene 1 initial"});
	
	tl
		.fromTo(boy_story_scene_1_character_dialogue, 10, {autoAlpha: 0},{autoAlpha:1, top: '+=10'})
		.to(boy_story_scene_1_character_dialogue, 10, {autoAlpha: 0, top: '-=10'}, '+=10');
		
	return tl;
}
	
function baby_to_school(){
	var tl = new TimelineMax({id: "baby to school"});
	
	tl
		.from(boy_story_scene_1_main_character, boy_sprite_duration, {repeat: 40,backgroundPosition: '-900px',ease:SteppedEase.config(12)}, 0.5)
		.from(boy_story_scene_1_ground, 50, {backgroundPosition: '-100% 0px', ease: Linear.easeNone}, 0.5)
		.from(boy_story_scene_1_bush, 50, {backgroundPosition: '-800px 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_city, 50, {backgroundPosition: '0% 0px'},{backgroundPosition: '4% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_sky, 50, {backgroundPosition: '-0% 0px'},{backgroundPosition: '-2% 0px', ease: Linear.easeNone}, 0.5)
		.to(boy_story_scene_1_parents, 3, {left: window_width}, '-=50')
		.to(boy_story_scene_1_memory_building, 50, {left: boy_story_scene_1_building_1_pause_position}, 0.5);
		
	return tl;
}

function bring_in_pfold(){
	var tl = new TimelineMax({id: "baby to school"});
	
	tl
	    .from(boy_story_scene_1_school1_memory_building_images, 10, {rotation: "-10"}, '+=1')
		.to(boy_story_scene_1_school1_memory_building_images, 10, {autoAlpha: 1}, '-=2')
		.fromTo(boy_story_scene_1_memory_building_1_info_cloud, 5,{autoAlpha: 0, top: boy_info_cloud_top_from},{autoAlpha: 1, top: boy_info_cloud_top_to}, '-=2')
		.set(boy_story_scene_1_main_character, {bottom: 20,backgroundImage: 'url(img/college-boy-sprite-2.png)'},'+=5')
		.to(boy_story_scene_1_memory_building_1_info_cloud, 5,{autoAlpha: 0, top: 50}, '+=20')
		.to(boy_story_scene_1_school1_memory_building_images, 20, {autoAlpha: 0, rotation: "10"}, '+=15');
	
	return tl;
}

/*
 Baby stage, baby goes to school and tehn school memories played ends
*/

/*
 kid goes to college and then college memories played
*/

function kid_to_college(){
	var tl = new TimelineMax({id: "kid to college"});
	
	tl
		.from(boy_story_scene_1_main_character, boy_sprite_duration, {repeat: 150, backgroundPosition: '-1800px', ease: SteppedEase.config(6)})
		
		.to(boy_story_scene_1_memory_building, 20, {left: window_width}, 0.5)
		.from(boy_story_scene_1_ground, 150, {backgroundPosition: '-500% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_bush, 150, {backgroundPosition: '0px 0px'},{backgroundPosition: '800px 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_city, 150, {backgroundPosition: '4% 0px'},{backgroundPosition: '8% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_sky, 150, {backgroundPosition: '-2% 0px'} , {backgroundPosition: '-4% 0px', ease: Linear.easeNone}, 0.5)
		.to(boy_story_scene_1_memory_building_2, 150, {left: boy_story_scene_1_building_2_pause_position}, 0.5)
		
		.fromTo(boy_story_scene_1_school_memory_building_images, 20, {scale: 0, autoAlpha: 0, rotation: "360"}, {scale: 1, autoAlpha: 1, rotation: "-10"}, 151)
		.fromTo(boy_story_scene_1_memory_building_2_info_cloud, 5,{autoAlpha: 0, top: college_boy_info_cloud_from},{autoAlpha: 1, top: college_boy_info_cloud_to}, '+=1')
		.to(boy_story_scene_1_school_memory_building_images, 10, {scale: 0, autoAlpha: 0, rotation: "360"}, '+=50')
		.to(boy_story_scene_1_memory_building_2_info_cloud, 5,{autoAlpha: 0, top: -25}, '-=5')
		
		.set(boy_story_scene_1_main_character, {bottom: 20,backgroundImage: 'url(img/man-sprite.png)'});
		
		
	return tl;
}

/*
  kid goes to college and then college memories ends
*/

/*
  Man goes to university and then university memories start
*/

function man_to_university(){
	var tl = new TimelineMax({id: "man to university"});
	
	tl
		.to(boy_story_scene_1_memory_building_2, 70, {left: window_width}, 0.5)
		.from(boy_story_scene_1_ground, 150, {backgroundPosition: '-600% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_bush, 150, {backgroundPosition: '0px 0px'},{backgroundPosition: '800px 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_city, 150, {backgroundPosition: '8% 0px'},{backgroundPosition: '12% 0px', ease: Linear.easeNone}, 0.5)
		.fromTo(boy_story_scene_1_sky, 150, {backgroundPosition: '-4% 0px'},{backgroundPosition: '-6% 0px', ease: Linear.easeNone}, 0.5)
		.from(boy_story_scene_1_main_character, boy_sprite_duration, {repeat: 250, backgroundPosition: '-900px 0px', ease: SteppedEase.config(6)}, 0.5)
		.to(boy_story_scene_1_memory_building_3, 150, {left: boy_story_scene_1_building_3_pause_position}, 1)
		
		.fromTo(boy_story_scene_1_college2_memory_building_images, 5, {autoAlpha: 0, rotation: "5"}, {autoAlpha: 1, rotation: "-5"}, 151)
		.to(boy_story_scene_1_college2_memory_building_images, 5, {autoAlpha: 0, rotation: "5"}, '+=5');
	
	return tl;
}

/*
  Man goes to university and then university memories ends
*/

master_tl.add(scene_1_initial());
master_tl.add(baby_to_school());
master_tl.add(bring_in_pfold());
master_tl.add(kid_to_college());
master_tl.add(man_to_university());

girl_story_1_tl.add(girl_story_1_scene_1_initial());
girl_story_1_tl.add(girl_story_1_baby_to_school());
girl_story_1_tl.add(girl_story_1_bring_in_pfold());
girl_story_1_tl.add(girl_story_1_kid_to_college());

met_proposal_story_1_tl.add(met_proposal_story_1_company());
met_proposal_story_1_tl.add(met_proposal_story_1_office_room());

reminder_subscribe_story_1_tl.add(reminder_subscribe_story_1());
  

		//combine the scroll and the animation
		$(window).scroll( function(){
		
			var window_viewport_top = $('#window-top-marker').offset().top;
			
			var window_scrolltop_pos = $(window).scrollTop();
			
			var duration_divs = $('.duration_div');
			
			duration_divs.each(function(){
				var $this_duration = $(this);
				var current_active_duration_length = $this_duration.offset().top + $this_duration.height();
				
				if(window_viewport_top >= $this_duration.offset().top && window_viewport_top <= current_active_duration_length){
					$this_duration.addClass('current_active_duration').siblings().removeClass('current_active_duration');
				}
			});
			
			if(duration_divs.hasClass('current_active_duration')){
				
				var prev_div_totalHeight = 0;
			
				$('.current_active_duration').prevAll().each(function(){
					prev_div_totalHeight += $(this).height();
				});
				
				var duration_container = $('.current_active_duration');
				var current_scene = duration_container.find('.scene');
				var current_scene_marker = duration_container.find('.scene_marker');
				var scene_marker_top = current_scene_marker.offset().top;
				
				var st = window_scrolltop_pos - prev_div_totalHeight;
				var ht = duration_container.height() - current_scene.height();
				
				var empty_space_after_Scene_over_height = window_viewport_top - scene_marker_top;
				var scene_duration_height_minus_scene_height = duration_container.height() - current_scene.height();
				
				windowScroll = st/ht;
				
				if(window_viewport_top >= scene_marker_top){
				
				current_scene.addClass('pinned-scene');
				
					if(empty_space_after_Scene_over_height >= scene_duration_height_minus_scene_height){
						
						current_scene.css({
							position: 'absolute',
							top: scene_duration_height_minus_scene_height
						});
						
						current_scene.removeClass('pinned-scene');
					
					} else{

						current_scene.css({
							position: 'fixed',
							top: 0,
							width: '100%'
						});
					}
				
				} 
				
				//window marker top is less than scene marker top make the scene next to it absolute and top 0
				
				$('.scene_marker').each(function(){
					if(window_viewport_top <= $(this).offset().top){
						
						$(this).next('.scene').css({
							position: 'absolute',
							top: 0
						});
						
						if($(this).next('.scene').hasClass('pinned-scene')){
							$(this).next('.scene').removeClass('pinned-scene');
						}
					}
				});
			
				//start animation when scene is pinned
				if(current_scene.hasClass('pinned-scene')){
					
					var tl_to_play = current_scene.data('tl');
					
					eval(tl_to_play).progress( windowScroll );	
					
				}
				
			}

		});
		
//Animaiton linked to scroll ends here

		/////////////////////////////////////////////
//seperate event animaitons code starts here (memory image slides)
		/////////////////////////////////////////////
		
//image gallery paper fold animaitons

	TweenMax.set("#boy-story-scene-1 #slider-container", {perspective:1000});
	TweenMax.set("#slider-container .image", {transformStyle:"preserve-3d"});
	TweenMax.set([".back-1, .back-2, .back-3, .back-4"], {zIndex:-1});
	TweenMax.set([".back-1, .back-2, .back-3, .back-4", ".front"], {backfaceVisibility:"hidden"});

$('#slider-container .image').on('click', function(){
  var $this_image = $(this);
  var $this_one = $this_image.find('.one');
  var $this_two = $this_image.find('.two');
  var $this_back_3 = $this_image.find('.back-3');
  var $this_two_back = $this_image.find('.twoBack');
  var $this_one_back = $this_image.find('.oneBack');
  var $this_image_front = $this_image.find('.front');
  var $this_front2 = $this_image.find('.front2');
  var $this_front1 = $this_image.find('.front1');
  
  //expland the folded paper when the current displayed image is being folded
  
  //folded iamge variables
  var folded_image = $('#slider-container > .image.folded');
  var folded_one = folded_image.find('.one');
  var folded_two = folded_image.find('.two');
  var folded_back_3 = folded_image.find('.back-3');
  var folded_two_back = folded_image.find('.twoBack');
  var folded_one_back = folded_image.find('.oneBack');
  var folded_image_front = folded_image.find('.front');
  var folded_front2 = folded_image.find('.front2');
  var folded_front1 = folded_image.find('.front1');
  
  TweenMax.set([folded_one, folded_back_3,folded_two_back ,folded_one_back, folded_front2],{zIndex:0, backfaceVisibility:'hidden'})
  
  TweenMax.set([folded_one, folded_front1],{
    rotationX:0, 
    transformOrigin:"0% 100%"
  });
  
  TweenMax.set(folded_image_front, {zIndex: 4});
  
  TweenMax.set([folded_two,folded_two_back, folded_front2],{
    rotationY:0, 
    transformOrigin:"0% 100%"
  })
    
  TweenMax.set([$this_one, $this_back_3,$this_two_back ,$this_one_back, $this_front2],{zIndex:4, backfaceVisibility:'visible'})
  
    TweenMax.to([$this_one, $this_front1], 0.5, {
    rotationX:-180, 
    transformOrigin:"0% 100%", 
    ease:Cubic.easeOut,
  });
  
    TweenMax.to([$this_two,$this_two_back, $this_front2], 0.5, {
    rotationY:-180, 
    transformOrigin:"0% 100%",
    ease:Cubic.easeOut,
    onComplete: hide_image,
    onCompleteParams:[$this_image]
  });
  
});	

//poloroid camera images slider for building memories
var boy_poloroid_images = $('#boy-story-scene-1 > .memory-building-2 > .school-memories > .school-building-memory-image-slideshow > img'),
    boy_poloroid_slideshow_play_button = $('#boy-story-scene-1 > .memory-building-2 > .school-memories .school-memories-play'),
    boy_poloroid_slideshow_pause_button = $('#boy-story-scene-1 > .memory-building-2 > .school-memories .school-memories-pause'),
    boy_polo_first_image = $('#boy-story-scene-1 > .memory-building-2 > .school-memories > .school-building-memory-image-slideshow > img.first'),
    boy_polo_last_image = $('#boy-story-scene-1 > .memory-building-2 > .school-memories > .school-building-memory-image-slideshow > img.last');
	
var boy_polo_timeline = new TimelineMax({repeat:-1, repeatDelay: -2, paused: true, });
boy_polo_timeline.staggerFromTo(boy_poloroid_images, 0.5, {css:{scale: 0, rotation: 0,autoAlpha:0}} , {css:{scale: 1, rotation: "360",
				autoAlpha:1}, repeat:1, yoyo:true, repeatDelay: 2.5}, 2);
boy_polo_timeline.seek(1);

boy_poloroid_slideshow_play_button.on('click', function(){
	
	TweenMax.to($('#boy-story-scene-1 > .airplane'), 10, {left: window_width, ease: Linear.easeNone, onComplete: function(){
		TweenMax.fromTo('#boy_control_button_container > .scroll_down', 0.2, {scale: 1},{scale: 0.7, repeat: 5, yoyo:true}, 0.5);
	}}, 1);
	
	boy_poloroid_slideshow_play_button.hide();
	boy_poloroid_slideshow_pause_button.show();
	boy_polo_timeline.play();
	
});

boy_poloroid_slideshow_pause_button.on('click', function(){
	boy_poloroid_slideshow_pause_button.hide();
	boy_poloroid_slideshow_play_button.show();
	boy_polo_timeline.pause();
});

		
		/////////////////////////////////////////////
//seperate event animaitons code ends here (memory image slides)
		////////////////////////////////////////////
		
		///////////////////////////////////////////////////////////////
		//girl story seperate animation functions booklet and poloroid
		///////////////////////////////////////////////////////////////
				/////////////////////////////////////////////
//seperate event animaitons code starts here (memory image slides)
		/////////////////////////////////////////////

		//booklet slideshow animation
//booklet setup
	TweenMax.set(".booklet", {perspective:1000});
	TweenMax.set(".booklet > .page", {transformStyle:"preserve-3d"});
	TweenMax.set(".booklet > .page > .back", {rotationY:-180});
	TweenMax.set([".booklet > .page > .back", ".booklet > .page > .front"], {backfaceVisibility:"hidden"});
	var page = $(".booklet > .page");
		
page.on("click",".front", function(){
    var $this =  $(this).parent();
    
    var action = new TimelineMax()
    .set($this.nextAll(),{zIndex:0})
    .set($this.next(),{zIndex:1})
    .set($this,{zIndex:4})
    .to($this, 0.6, {
      rotationY:-180, 
      transformOrigin:"0% 100%", 
      ease:Cubic.easeOut,
    })

   });
  
    page.on("click",".back", function(){
      var $this =  $(this).parent();
      
      var action = new TimelineMax()
      .set($this.nextAll(),{zIndex:0})
	  .set($this.next(),{zIndex:1})
      .set($this,{zIndex:4})
      .to($this, 0.6, {
        rotationY:0, 
        transformOrigin:"0% 100%", 
        ease:Cubic.easeOut
      });
      
  });
  
//poloroid camera images slider for building memories
var poloroid_images = $('#girl-story-scene-1 > .memory-building-1 > .school-memories > .school-building-memory-image-slideshow > img'),
    poloroid_slideshow_play_button = $('#girl-story-scene-1 > .memory-building-1 > .school-memories .school-memories-play'),
    poloroid_slideshow_pause_button = $('#girl-story-scene-1 > .memory-building-1 > .school-memories .school-memories-pause'),
    polo_first_image = $('#girl-story-scene-1 > .memory-building-1 > .school-memories > .school-building-memory-image-slideshow > img.first'),
    polo_last_image = $('#girl-story-scene-1 > .memory-building-1 > .school-memories > .school-building-memory-image-slideshow > img.last');
	
var polo_timeline = new TimelineMax({repeat:-1, repeatDelay: -2, paused: true, });
polo_timeline.staggerFromTo(poloroid_images, 0.5, {css:{scale: 0, rotation: 0,autoAlpha:0}} , {css:{scale: 1, rotation: "360",
				autoAlpha:1}, repeat:1, yoyo:true, repeatDelay: 2.5}, 2);
polo_timeline.seek(1);

poloroid_slideshow_play_button.on('click', function(){
	
	poloroid_slideshow_play_button.hide();
	poloroid_slideshow_pause_button.show();
	polo_timeline.play();
	
});

poloroid_slideshow_pause_button.on('click', function(){
	poloroid_slideshow_pause_button.hide();
	poloroid_slideshow_play_button.show();
	polo_timeline.pause();
});

});