const mongoose = require('mongoose');
const Questionnaire = require('../models/Questionnaire');




// ####Get Questionnarie####
exports.getQuestionnaires = (req, res) => {
	Questionnaire.find()
		.then((questionnaires) => {
			res.render('questionnaire', {
				title: 'Questionnaires',
				questionnaires: questionnaires
			})
		})
};

// ####Post NewQuestionnarie####
exports.getNewQuestionnaires = (req, res) => {
	// console.log('TESTreq.body is:', req.body);
	const name = req.body.questionnaire_name;
	const question_type = req.body.question_type;
	const dropdown_action = req.body.dropdown_action;
	const qa_key = req.body.qa_key_name;
	let questionnaire = new Questionnaire();
	questionnaire.name = name;
	questionnaire.question_type = dropdown_action;
	questionnaire.qa_key = qa_key;
	questionnaire.save()
		.then(() => {
			res.redirect('/questionnaire')
		})
};

// ####Edit Questionnarie####
exports.getEditQuestionnaires = (req, res) => {
	// console.log('req.body:', req.body);
	Questionnaire.findOne({ _id: req.params.id })
		.then(questionnaire => {
			res.render('EditQuestionnaire', {questionnaire: questionnaire});
		})
};

// ####Post Edited Questionnarie####
exports.postEditQuestionnaires = (req, res) => {
	// console.log('req.body:', req.body);
	Questionnaire.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true
	})
		.then(questionnaire => {
			res.redirect('/questionnaire')
		})
};

// ####Delete Questionnarie####
exports.getDeleteQuestionnaires = (req, res) => {
	Questionnaire.findByIdAndRemove(req.params.id,
	 (err, questionnaire) => {
			res.redirect('/questionnaire')
		});
};

//##################################################################

// ####Get Questionnaires Api####
exports.getQuestionnairesApi = (req, res) => {
	Questionnaire.find()
		.then(questionnaires => {
			res.json(questionnaires)
		})
};
// ####Get New Questionnaires Api####
exports.getNewQuestionnairesApi = (req, res) => {
	const name = req.body.name;
	const question_type = req.body.question_type;
	const qa_key = req.body.qa_key_name;
	let questionnaire = new Questionnaire();
	questionnaire.name = name;
	questionnaire.question_type = question_type;
	questionnaire.qa_key = qa_key;
	questionnaire.save()
		.then(() => {
			res.redirect('/api/questionnaire')
		})
};
// ####Edit Questionnaires Api####
exports.getEditQuestionnairesApi = (req, res) => {
	Questionnaire.findOne({ _id: req.params.id })
		.then(questionnaire => {
			res.json(questionnaire);
		})
};
// ####Delete Questionnaires Api####
exports.getDeleteQuestionnairesApi = (req, res) => {
	Questionnaire.findOne({ _id: req.params.id })
    .remove((err, data) => {
			res.redirect('/api/questionnaire')
		});
};
