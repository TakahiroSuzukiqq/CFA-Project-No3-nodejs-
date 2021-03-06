var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard for ICN' });
});


//twitter
router.post('/get_users', function(req, res){
  var screen_name = req.body.handle;
  // console.log(screen_name);  //test in the Terminal
  var screen_name = req.body.handle;

  var users = userList(res, screen_name);
  // res.render('list');
});


//dashboard index page
// const Answer = require('../models/Answer');
// const AnswerController = require('../controllers/AnswerController');
//
// router.get('/', AnswerController.getAnswers);

// module.exports = router;

//dashboard questionnaire page
const Questionnaire = require('../models/Questionnaire');
const QuestionnaireController = require('../controllers/QuestionnaireController');

router.get('/questionnaire', QuestionnaireController.getQuestionnaires);
router.post('/questionnaire', QuestionnaireController.getNewQuestionnaires);
router.get('/questionnaire/:id/edit', QuestionnaireController.getEditQuestionnaires);
router.post('/questionnaire/:id/edit', QuestionnaireController.postEditQuestionnaires);
router.get('/questionnaire/:id/delete', QuestionnaireController.getDeleteQuestionnaires);

router.get('/api/questionnaire', QuestionnaireController.getQuestionnairesApi);
router.post('/api/questionnaire', QuestionnaireController.getNewQuestionnairesApi);
router.get('/api/questionnaire/:id', QuestionnaireController.getEditQuestionnairesApi);
router.delete('/api/questionnaire/:id', QuestionnaireController.getDeleteQuestionnairesApi);



module.exports = router;
