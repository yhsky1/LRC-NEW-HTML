/* 코어 start */
var MUI = MUI || {
	resize: {
		chk: function(target){
			if (target.width() >= 1025 ) {
				target.removeClass('pc mobile tablet').addClass('pc');
			}
			else if(target.width() >=  768){
				target.removeClass('pc mobile tablet').addClass('tablet');
			}
			else {
				target.removeClass('pc mobile tablet').addClass('mobile');
			}
			
		},
		font: function(){
			var doc = document.documentElement,
			fontSizeVal = (parseFloat((doc.clientWidth / 320 * 62.5) * 100) / 100);
			fontSizeVal = (fontSizeVal >= 85) ? 85 : fontSizeVal;

			doc.style.fontSize = fontSizeVal + '%';
		},
		resize: function($BODY){
			$(window).on('resize', function(){
				MUI.resize.chk($BODY);
				MUI.resize.font();
			});
		},
	},
	Map: {
		init: function(){
			var JqMap = function(){
				this.map = new Object();
			};
			JqMap.prototype = {
				/* key, value 값으로 구성된 데이터를 추가 */
				put: function (key, value) {
					this.map[key] = value;
				},
				/* 지정한 key값의 value값 반환 */
				get: function (key) {
					return this.map[key];
				},
				/* 구성된 key 값 존재여부 반환 */
				containsKey: function (key) {
					return key in this.map;
				},
				/* 구성된 value 값 존재여부 반환 */
				containsValue: function (value) {
					for (var prop in this.map) {
						if (this.map[prop] == value) {
							return true;
						}
					}
					return false;
				},
				/* 구성된 데이터 초기화 */
				clear: function () {
					for (var prop in this.map) {
						delete this.map[prop];
					}
				},
				/*  key에 해당하는 데이터 삭제 */
				remove: function (key) {
					delete this.map[key];
				},
				/* 배열로 key 반환 */
				keys: function () {
					var arKey = new Array();
					for (var prop in this.map) {
						arKey.push(prop);
					}
					return arKey;
				},
				/* 배열로 value 반환 */
				values: function () {
					var arVal = new Array();
					for (var prop in this.map) {
						arVal.push(this.map[prop]);
					}
					return arVal;
				},
				/* Map에 구성된 개수 반환 */
				size: function () {
					var count = 0;
					for (var prop in this.map) {
						count++;
					}
					return count;
				}
			};

			return new JqMap();

		}
	},
	slide: {
		init: function(target, sort, option){
			if(sort == 'slick') {
				//console.log('slick');
				return target.slick(option);
			}
		},
	},
	layer: {
		scrollTop: 0,
		calculate: function(layer){
			var layer = $(layer),
				layerIn = layer.find('.pop_inner'),
				winH = $(window).height(),
				winW = $(window).width();
				layerIn.find('.pop_scroll').removeAttr('style');

			var layerH = layer.height(),
				layerW = layer.width(),
				marginH = parseInt(layerIn.css('marginTop')) + parseInt(layerIn.css('marginBottom'));
			//console.log(layer, winH, winW, layerH, layerW, marginH);
			
			if(winH < layerH){
				layerIn.find('.pop_scroll').css({
					height: winH - marginH,
					overflow: 'auto',
				});
				layer.css({
					top: 0,
					left: (winW - layerW) / 2,
				});
			}
			else{
				layerIn.find('.pop_scroll').removeAttr('style');
				layer.css({
					top: (winH - layerH) / 2,
					left: (winW - layerW) / 2,
				});
			}

		},
		openClick: function(target, dimmed, parent, callback){
            var that = this;
            $(document).on('click', target, function(e){
                var layer = '.'+$(this).data('layer');
                var targetDom = $(this);
                //that.scrollTop = $(window).scrollTop();

                if(callback){
                    callback(show, layer, targetDom);
                }
                else{
                    show();
                }
                
                function show(){
                    that.open(layer, dimmed, parent);
                }

                e.preventDefault();
            });
        },
        open: function(layer, dimmed, parent, callback){
            var that = this;
            that.scrollTop = $(window).scrollTop();
            $('body').addClass('fixed');
            $('body').css({top:-that.scrollTop});
            if(dimmed) $(dimmed).fadeIn();
			if(callback) callback(layer);
            $(parent + layer).show();
            that.calculate(layer);
            $(window).on('resize.layer', function(){
                that.calculate(layer);
            });
        },
        closeClick: function(target, dimmed, parent, callback){
            var that = this;
            $(document).on('click', target, function(e){
                var layer;
                var targetDom = $(this);
                if(target == dimmed){
                    layer = parent;
                }
                else{
                    layer = parent + '.'+$(this).data('layer');
                }
                
                if(callback){
                    callback(hide, layer, targetDom);
                }
                else{
                    hide();
                }

                function hide() {
                    that.close(layer, dimmed, parent);
                }

                e.preventDefault();
            });
        },
        close :function(layer, dimmed, parent, callback){
            var that = this;
            if(layer != dimmed) {
				$(layer).hide();
            }
            else {
                $(parent).hide();
            }
			if(dimmed) $(dimmed).fadeOut();
			if(callback) callback(layer);
            $('body').removeClass('fixed');
            $('body').css({top:0});
			$(window).scrollTop(that.scrollTop);
            $(window).off('resize.layer');
        },
	},
	event: {
		toggle: function(target, parent, callback){

			$(document).on('click', target, function(e) {
				var $this = $(this);
				var $targetDiv = $(target);
				var layer = $('.' + $this.data('target'));
				var sort = $this.data('sort');
				var onClass = $this.data('on');
				var siblings = $this.data('siblings');
				var $parent =$(parent);
				console.log(sort, onClass, siblings, $parent);

				function logic(){
					
					if(onClass){
						
						if(parent === null ? $this.hasClass('on') : layer.is(':visible')){
							$this.removeClass('on');
							layer.removeClass('on');
						}
						else{
							if(siblings){
								$targetDiv.removeClass('on');
								$parent.removeClass('on');
							}
							$this.addClass('on');
							layer.addClass('on');
						}	
					}
	
					if(layer.is(':visible')){
						if(sort == 'fade'){
							layer.fadeOut();
						}
						else if (sort == 'normal'){
							layer.hide();
						}
						else if (sort == 'none'){
							return false;
						}
						else{
							layer.slideUp();
						}
					}
					else{
						if(sort == 'fade'){
							if(siblings){
								$parent.fadeOut();
							}
							layer.fadeIn();
						}
						else if (sort == 'normal'){
							if(siblings){
								$parent.hide();
							}
							layer.show();
						}
						else if (sort == 'none'){
							return false;
						}
						else{
							if(siblings){
								$parent.slideUp();
							}
							layer.slideDown();
						}
					}
	
				}

				if(callback) {
					callback(logic, layer);
				}
				else{
					logic();
				}
				//e.preventDefault();
			});
		},
		goTop: function(target){
			target.on('click',function(e) {
				$('html, body').stop().animate({'scrollTop': 0}, 1000);
            	e.preventDefault();
			});
		}, 
		topScrollCh: function(target, parent){
			if(parent.hasClass('pc')){
				var winScroll = $(window).scrollTop();
				if(winScroll == 0){
					target.fadeOut();
					$('#header .inner').removeClass('on');
				}
				else{
					target.fadeIn();
					$('#header .inner').addClass('on');
				}
			}
			else{
				return;
			}
		},
		taps: function(tab_nav, callback){
			var target = tab_nav + '.tab_nav li';
			//console.log(target);
			$(document).on('click', target, function(e){
				var $this = $(this);
				var $layer = $(tab_nav + '.tab_cont');
				var idx = $this.index();

				function swap(){
					$this.addClass('on').siblings().removeClass('on');
					$layer.find('> div').eq(idx).show().siblings().hide();
				} 
				if(callback){
					callback(swap);
				}
				else{
					swap();
				}
				e.preventDefault();
			});
		},
		calander: function(target, option, callback){
			$(target).each(function(){
				$(this).datepicker(option); 
				$(this).datepicker('setDate', 'today'); 
				$(this).on('change', callback);
			});
		},
		customSelect:function(parent){
			var target = parent + " button";
			var listTarget = parent + " a";
			var $parent;
			$(document).on("click", target, function(e){
				$parent = $(this).parent();
				if($parent.hasClass("on")){
					$parent.removeClass("on");
				}
				else{
					$(parent).removeClass("on");
                    $parent.addClass("on");
                    MUI.iscrolls.resize();
				}
				//console.log($parent);
			});
			$(document).on("click", listTarget, function(e){
				var bt = $parent.find("button");
				var input = $parent.find("input");
				var val = $(this).data("val");
				var text = $(this).text();

				input.val(val);
				bt.text(text);
				//console.log(input, input.val());

				$parent.addClass("select");
				$parent.removeClass("on");

				e.preventDefault();
			});
		},
        changeSelect:function(target){
			$(document).on("change", target, function(e){
				var val = $(this).val();
				var target = $(this).parent().find(".selText");
				if (val == "DISP_ROOT") {
					target.html(target.attr("data-name"));
				} else {
					target.html($(this).find(".bestSubCate" + val).attr("data-name"));
				}
			});
		},
		fixedTop: function(){
			var enScrollTop = 0,
				beScrollTop = 0,
				$header = $('#header'),
				$topBanner = $('.top_bn_w'),
				fixdTop = $header.offset().top,
				paddingTop = $header.height(),
				scrollThreshold = 90;

			if($topBanner.length && $topBanner.is(':visible')){
				$header.removeClass('fixed');
				$header.css({'height': 'auto'});
			}
			else{
				$header.addClass('fixed');
				$header.css({'height': paddingTop});		
			}

			$(window).on('scroll', function(e) {

				var scrollpos = window.scrollY || window.pageYOffset;

				enScrollTop = scrollpos;

				if($topBanner.length && $topBanner.is(':visible')){
					//console.log(fixdTop, scrollpos);
					if(fixdTop <= scrollpos) {
						$header.addClass('fixed');
					}
					else {
						$header.removeClass('fixed');
					}
				}
				if (Math.abs(enScrollTop - beScrollTop) < scrollThreshold) return false;

				if(!$('body').hasClass('pc')) {	
					beScrollTop > enScrollTop ? $header.removeClass('on') : $header.addClass('on');
				}
				else{
					$header.removeClass('on');
				}

				beScrollTop = enScrollTop;
			});
		},	
	},
	iscrolls: {
        cash: null,
        num: 0,
		init: function(target, option){

			this.cash = this.cash ? this.cash :  MUI.Map.init();

            $(target).each(function(idx, item){
                $(target)[idx].iscrolls = new IScroll(item, option);
                //console.log(item);
                this.cash.put(this.num++, {sort: item, option: option});
            }.bind(this));
            //console.log(this.cash);
		},
		resize: function(){
			var that = this;
			if(that.cash){
				$.each(that.cash.map, function(key, value){
                    if(value.sort.className == "select_list"){
                       //console.log(key, value.sort.iscrolls);
                        value.sort.iscrolls.scrollTo(0, 0);                 
                    }
				});
			}
			else{
				return;
			}
		},
	},

};
/* 코어 end */

