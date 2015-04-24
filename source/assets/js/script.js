jQuery(document).ready(function($) {
	var current_fs, next_fs, prev_fs;

	$.validator.setDefaults({
		submitHandler: function() {
			alert('submitted!');
		}
	});

	$('.form__button--next').on('click', function(event) {
		event.preventDefault();
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		if($('.jobs-form').valid()) {
			current_fs.hide();
			next_fs.show();
			$('.form-indicator__title--active').removeClass(function(){
				$(this).next().addClass('form-indicator__title--active');
				return 'form-indicator__title--active';
			});
		}
	});

	$('.form__button--prev').one('click', function(event) {
		event.preventDefault();
		current_fs = $(this).parent();
		prev_fs = $(this).parent().prev();

		current_fs.hide();
		prev_fs.show();

		$('.form-indicator__title--active').removeClass(function(){
			$(this).prev().addClass('form-indicator__title--active');
			return 'form-indicator__title--active';
		});
	});

	$('.jobs-form').validate({
		rules:  {
			jobs_name: 'required',

		},
		messages: {
			jobs_name: 'Vul de vacature titel in',
			company_name: 'Vul de bedrijfsnaam in',
			job_description: 'Vul de vacature omschrijving in',
			// job_logo: 'Upload een *.jpeg formaat',
			home_town: 'Vul uw woonplaatst in',
			state_input: 'Kies uw provincie',
			education_input: 'Kies uw opleidings niveau',
			line_of_work_input: 'Kies uw branche',
			function_group_input: 'Kies uw functie',
			career_level_input: 'Kies uw carriere niveau',
			hours_input: 'Kies het aantal uren',
			organisation: 'Vul uw organisatie in',
			contact_firstname: 'Vul de voornaam in van contactpersoon',
			contact_lastname: 'Vul de achternaam in van contactpersoon',
			phone_number: 'Vul uw telefoon nummer in',
			email: 'Vul uw e-mail in',
			bla: 'Vul de vacature informatie in',
		},

	});
});

jQuery.extend(jQuery.validator.messages, {
  required: "Dit veld is verplicht",
  remote: "Please fix this field.",
  email: "Vul een geldig e-mail adres in",
  url: "Vul een geldige URL in",
  date: "Vul een geldige datum in",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Vul alleen cijfers in",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Upload een bestand met de juiste extensie",
  maxlength: jQuery.validator.format("Vul niet meer dan {0} karakters in."),
  minlength: jQuery.validator.format("Vul ten minste {0} karakters in."),
  rangelength: jQuery.validator.format("Vul een waarde tussen de {0} en {1} karakters in."),
  range: jQuery.validator.format("Vul een waarde tussen de {0} en {1} in."),
  max: jQuery.validator.format("Vul een waarde in dat minder is dan- of gelijk aan {0}."),
  min: jQuery.validator.format("Vul een waarde in dat meer is dan- of gelijk is aan {0}.")
 });