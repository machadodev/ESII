/// <reference types="cypress" />

describe('WAR', () => {
  it('Abrir tela de menu e selecionar participantes depois clicar em jogar', () => {
    // eslint-disable-next-line no-undef
    cy.visit('https://war-pi.vercel.app')
    // eslint-disable-next-line no-undef
    cy.get('.bg-primary > .card-body > #comboPlayer > .css-yk16xz-control > .css-1hwfws3').click()
    // eslint-disable-next-line no-undef
    cy.get('.bg-primary > .card-body > #comboPlayer > .css-26l3qy-menu > .css-11unzgr').click()
    // eslint-disable-next-line no-undef
    cy.get('.bg-success > .card-body > #comboPlayer > .css-yk16xz-control > .css-1hwfws3').click()
    // eslint-disable-next-line no-undef
    cy.get('.bg-success > .card-body > #comboPlayer > .css-26l3qy-menu > .css-11unzgr').click()
    // eslint-disable-next-line no-undef
    cy.get('.bg-danger > .card-body > #comboPlayer > .css-yk16xz-control > .css-1hwfws3').click()
    // eslint-disable-next-line no-undef
    cy.get('.bg-danger> .card-body > #comboPlayer > .css-26l3qy-menu > .css-11unzgr').click()
    // eslint-disable-next-line no-undef
    cy.get('.btn').click()
  })
})
