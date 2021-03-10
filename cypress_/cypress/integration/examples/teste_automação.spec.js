
describe('Smoke teste', () => {

  it('Visite a URL', function () {
    cy.visit('https://www.google.com/')
  })

  it('Clica na caixa de texto', function () {
    cy.get('.gLFyf').click();
    cy.get('.gLFyf').type('some text!');
  })

  it('Preenche o campo de texto', function () {
    cy.get('.FPdoLc > center > .gNO89b').click().clock().tick(1000);
  })

  it('Clica na URL, e é direcionado para URL clicada', function () {
    //cy.get(':nth-child(2) > .hide-focus-ring').click();
    //cy.get('.C8jpC').click();
    cy.visit("https://context.reverso.net/traducao/ingles-portugues/some+text");
  })

  it('Preenche o campo de pesquisa da página context', function () {
    cy.get('.keyboardInputInitiator').click();
    cy.get(':nth-child(4) > tbody > tr > :nth-child(10)').type('l');
    cy.get('.icons > .cancel').click();
    cy.get('#src-selector > .sel-arrow').click();
    cy.get('#src-selector > .drop-down > [data-value="pt"]').click();
  })

  it('Seleciona no checkbox o checkbox textual', function () {
    cy.get('[href="/traducao/ingles-portugues/text#textual"]').click();
  })

  it('Compara o texto na página textual', function () {
    cy.get('.entry').contains('textual');
  })

  it('Consultar mensagem de pesquisa:' +
    'Estes exemplos podem conter palavras rudes baseadas nas suas pesquisas.', function () {
      cy.get('#rude > .message').contains('Estes exemplos podem conter palavras rudes baseadas nas suas pesquisas.');
    })
})

