
// Example of builder of nested objects (only 1 level of nesting)
// Pay attention to implementation of sharing created object between classes: 
/* 
base:
  constructor(sellerWizard = new SellerWizard()) {
    this.sellerWizard = sellerWizard
  } 

inherited:
  constructor(sellerWizard) {
    super(sellerWizard)
  }
*/ 

class SellerWizard {
  constructor() {
    this.personalData = {}
    this.companyData = {}
    this.paymentData = {}
  }
}

class SellerWizardBuilder {
  constructor(sellerWizard = new SellerWizard()) {
    this.sellerWizard = sellerWizard
  }

  get personalData() {
    return new PersonalDataBuilder(this.sellerWizard)
  }

  get companyData() {
    return new CompanyDataBuilder(this.sellerWizard)
  }

  get paymentData() {
    return new PaymentDataBuilder(this.sellerWizard)
  }

  build() {
    return this.sellerWizard
  }
}

class PersonalDataBuilder extends SellerWizardBuilder {
  constructor(sellerWizard) {
    super(sellerWizard)
  }

  hasName(name = 'Alex') {
    this.sellerWizard.personalData.name = name
    return this
  }

  hasSecondName(secondName = 'Moonface') {
    this.sellerWizard.personalData.secondName = secondName
    return this
  }

  isDefault() {
    this.hasName()
    this.hasSecondName()
    return this
  }
}

class CompanyDataBuilder extends SellerWizardBuilder {
  constructor(sellerWizard) {
    super(sellerWizard)
  }

  hasName(companyName = 'Ccik') {
    this.sellerWizard.companyData.name = companyName
    return this
  }

  isDefault() {
    this.hasName()
    return this
  }
}


const sellerWizardBuilder = new SellerWizardBuilder()

const wizardData = sellerWizardBuilder
  .personalData.isDefault().hasSecondName('Not default person name')
  .companyData.isDefault().hasName('Not default company name')
  .build()

console.log(wizardData)

