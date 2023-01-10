describe('check navigation',function(){

  it('Visit the URL',function(){
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
  })

  it('click button',function(){
      cy.get('#btn-make-appointment').click();
  })

  it('check current URL',function(){
      cy.url().should('include', '/profile.php')
  })

}) 