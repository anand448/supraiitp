/*-------menu--------*/
$('.menu li a').mouseover(function()
{
	$(this).addClass('menu_li_a_hover').css('color','#c03600');
}).mouseleave(function()
{
	$(this).removeClass('menu_li_a_hover').css('color','');
});

/*--------mobile menu-------*/
$('.menu_mob img').on("click",function()
{
	$('.menu_mob ul').slideToggle(800).toggleClass('visib');
});



/*--------mobile menu-------*/

/*----entery on scrolling---*/
$(document).scroll(function()
{
	var posn = $(document).scrollTop();
	
	var posn_menu =$('#header').offset().top/2.5;
	
	if(posn > posn_menu)
	{
		$('.menu_bar').css('top','0px').css('left','0px');
	}
	else
	{
		$('.menu_bar').css('top','').css('left','');
	}
});

/*----team members page------*/

$('#tabs').tabs();

$('#team_cov').mouseenter(function()
{
	$(this).css('filter','none');
}).mouseleave(function()
{
	$(this).css('filter','blur(3px)');
});


//team members hover effect
$('.mem_div').mouseenter(function()
{
	
	$(this).find('.overlay').addClass('mem_div_hover_overlay');
	$(this).find('.overlay div').addClass('mem_div_hover_overlay_div');
}).mouseleave(function()
{
	$(this).find('.overlay').removeClass('mem_div_hover_overlay');
	$(this).find('.overlay div').removeClass('mem_div_hover_overlay_div');
});


//special team member hover effect
$('.spc_mem').mouseenter(function()
{
	
	$(this).find('.spc_mem_img').addClass('spc_mem_hover_spc_mem_img');
	$(this).find('.spc_mem_det').addClass('spc_mem_hover_spc_mem_det');
}).mouseleave(function()
{
	$(this).find('.spc_mem_img').removeClass('spc_mem_hover_spc_mem_img');
	$(this).find('.spc_mem_det').removeClass('spc_mem_hover_spc_mem_det');
});


//web developer hover effect
$('.wteam').mouseenter(function()
{
	
	$(this).find('.wteam_img').addClass('wteam_hover_wteam_img');
	$(this).find('.wteam_det').addClass('wteam_hover_wteam_det');
}).mouseleave(function()
{
	$(this).find('.wteam_img').removeClass('wteam_hover_wteam_img');
	$(this).find('.wteam_det').removeClass('wteam_hover_wteam_det');
});
