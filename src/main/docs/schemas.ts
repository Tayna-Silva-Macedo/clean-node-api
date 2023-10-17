import { accountSchema, errorSchema, loginParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, signUpParamsSchema, addSurveyParamsSchema, saveSurveyParamsSchema, surveyResultSchema, surveyResultAnswerSchema } from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  error: errorSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
