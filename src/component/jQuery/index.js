import $ from 'jquery'

export default $(function() {
	$('.input input')
		.focus(function() {
			$(this)
				.parent('.input')
				.each(function() {
					$('label', this).css({
						'line-height': '2vw',
						'font-size': '1vw',
						'font-weight': '100',
						top: '0vw',
						color: '#ed2553',
					})
					$('.spin', this).css({
						width: '100%',
					})
				})
		})
		.blur(function() {
			$('.spin').css({
				width: '0px',
			})
			if ($(this).val() === '') {
				$(this)
					.parent('.input')
					.each(function() {
						$('label', this).css({
							'font-size': '1.5vw',
							'font-weight': '300',
							top: '1vw',
							'line-height': '3vw',
							color: '#16d2c5',
						})
					})
			}
		})

	$('.alt-2').click(function() {
		if (!$(this).hasClass('material-button')) {
			$('.shape').css({
				width: '100%',
				height: '100%',
				transform: 'rotate(0deg)',
			})

			setTimeout(function() {
				$('.overbox').css({
					overflow: 'initial',
				})
			}, 600)

			$(this).animate(
				{
					width: '4vw',
					height: '4vw',
				},
				500,
				function() {
					$('.box').removeClass('back')

					$(this).removeClass('active')
				}
			)

			$('.overbox .title').fadeOut(300)
			$('.overbox .input').fadeOut(300)
			$('.overbox .button').fadeOut(300)

			$('.alt-2').addClass('material-buton')
		}
	})

	$('.material-button').click(function() {
		if ($(this).hasClass('material-button')) {
			setTimeout(function() {
				$('.overbox').css({
					overflow: 'hidden',
				})
				$('.box').addClass('back')
			}, 200)
			$(this)
				.addClass('active')
				.animate({
					width: '700px',
					height: '700px',
				})

			setTimeout(function() {
				$('.shape').css({
					width: '57%',
					height: '65%',
					transform: 'rotate(45deg)',
				})

				$('.overbox .title').fadeIn(300)
				$('.overbox .input').fadeIn(300)
				$('.overbox .button').fadeIn(300)
			}, 700)

			$(this).removeClass('material-button')
		}

		if ($('.alt-2').hasClass('material-buton')) {
			$('.alt-2').removeClass('material-buton')
			$('.alt-2').addClass('material-button')
		}
	})
})
