/* eslint-disable max-classes-per-file */
const functions = require('firebase-functions')

// TODO: extract into specialized modules and publish to npm

class DomainError extends Error {
  constructor(message, info) {
    super()
    this.message = message
    this.info = info
  }
}

class NOT_FOUND extends DomainError { }

class UNAUTHORIZED extends DomainError { }

class ALREADY_CREATED extends DomainError { }

class SERVER_ERROR extends DomainError { }

class INTEGRATION_ERROR extends DomainError { }

class VALIDATION_ERROR extends DomainError { }

const fromAxios = error => {
  if (!error.isAxiosError) throw new SERVER_ERROR(error)

  const { response: { status, data } } = error

  switch (status) {
    case 400:
    case 429:
      throw new VALIDATION_ERROR(data.message || data, data.info)
    case 401:
      throw new UNAUTHORIZED(data.message || data, data.info)
    case 409:
      throw new ALREADY_CREATED(data.message || data, data.info)
    case 500:
      throw new INTEGRATION_ERROR(data.message || data, data.info)
    default:
      throw new SERVER_ERROR(data.message || data, data.info)
  }

}

const toHTTP = (error, res) => {
  const errorMsg = error.message ? error.message : error

  switch (error.name) {
    case ALREADY_CREATED.name:
      return res.status(409).json({ code: error.name, message: errorMsg, error })
    case NOT_FOUND.name:
      return res.status(404).json({ code: error.name, message: errorMsg, error })
    case VALIDATION_ERROR.name:
      return res.status(422).json({ code: error.name, message: errorMsg, error })
    default:
      res.status(500).json({ code: error.name, message: errorMsg, error })
  }
}

const toFirebase = error => {
  const errorMsg = error.message ? error.message : error

  if (error instanceof NOT_FOUND) throw new functions.https.HttpsError('not-found', errorMsg)
  if (error instanceof UNAUTHORIZED) throw new functions.https.HttpsError('permission-denied', errorMsg)
  if (error instanceof ALREADY_CREATED) throw new functions.https.HttpsError('already-exists', errorMsg)
  if (error instanceof VALIDATION_ERROR) throw new functions.https.HttpsError('invalid-argument', errorMsg)

  throw new functions.https.HttpsError('internal', errorMsg)
}

module.exports = {
  NOT_FOUND,
  ALREADY_CREATED,
  SERVER_ERROR,
  UNAUTHORIZED,
  VALIDATION_ERROR,
  INTEGRATION_ERROR,
  toHTTP,
  toFirebase,
  fromAxios
}
