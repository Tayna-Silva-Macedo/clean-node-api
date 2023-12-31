import { SaveSurveyResultRepository, LoadSurveyResultRepository } from '@/data/protocols'
import { SaveSurveyResult } from '@/domain/usecases'
import { mockSurveyResultModel } from '@/../tests/domain/mocks'

export class SaveSurveyResultRepositorySpy implements SaveSurveyResultRepository {
  params: SaveSurveyResult.Params

  async save (params: SaveSurveyResult.Params): Promise<void> {
    this.params = params
    return Promise.resolve()
  }
}

export class LoadSurveyResultRepositorySpy implements LoadSurveyResultRepository {
  result = mockSurveyResultModel()
  surveyId: string
  accountId: string

  async loadBySurveyId (surveyId: string, accountId: string): Promise<LoadSurveyResultRepository.Result> {
    this.surveyId = surveyId
    this.accountId = accountId
    return Promise.resolve(this.result)
  }
}
