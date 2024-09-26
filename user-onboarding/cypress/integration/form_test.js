describe('User Onboarding App', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  //helpers to grab elements
  const nameInput = () => cy.get('input[name=first_name]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  const termsBox = () => cy.get('input[name=terms]')
  const submitBtn = () => cy.get('button[id="submitBtn"]');

  it('sanity check to make sure tests work', () => {
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
      expect({}).not.to.equal({});
      expect({}).to.eql({});
    })

  it('the proper elements are showing', () => {
      nameInput().should('exist');
      emailInput().should('exist');
      passwordInput().should('exist');
      termsBox().should('exist');
      submitBtn().should('exist');
  })

describe('Filling out the inputs and checkbox and cancelling', () => {
    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })

    it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled');
    })

    it('can type in the inputs', () => {
        nameInput()
        .should('have.value', '')
        .type('Ben')
        .should('have.value', 'Ben')

        emailInput()
        .should('have.value', '')
        .type('abc@aol.com')
        .should('have.value', 'abc@aol.com')

        passwordInput()
        .should('have.value', '')
        .type('password')
        .should('have.value', 'password')
    })

    it('can user check terms of service box', () => {
        termsBox().check()
        termsBox().uncheck()
    })

    it('the submit button enables when all fields are completed', () => {
        nameInput().type('Ben');
        emailInput().type('abc@aol.com');
        passwordInput().type('password');
        termsBox().check();
        submitBtn().should('not.be.disabled');
    })
})

describe('Submitting a new user', () => {
    it('can submit a new user', () => {
        nameInput().type('Ben');
        emailInput().type('abc@aol.com');
        passwordInput().type('password');
        termsBox().check();
        submitBtn().click();
    })
})

describe('Can check form validation if input is left empty', () => {
    it('display error messages', () => {
        nameInput().type('Be').clear();
        emailInput().type('a').clear();
        passwordInput().type('p').clear();
        termsBox().check().uncheck();
        cy.contains('Name required!');
        cy.contains('Email address is required')
        cy.contains('You must choose a password')
        cy.contains('Must accept terms of service')
        
    })
})







}) /////THIS IS THE END