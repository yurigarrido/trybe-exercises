const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');


const { writeAFile } = require('../writeAFile')

const CONTEUDO_DO_ARQUIVO = 'ok';

describe('testing func writeFile', () => {

  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns('ok');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('the response', () => {
      it('is String', () => {
        const resposta = writeAFile('arquivo.txt', CONTEUDO_DO_ARQUIVO);
        expect(resposta).to.be.a('string');
      })

      it('is "ok"', () => {
        const resposta = writeAFile('arquivo.txt', CONTEUDO_DO_ARQUIVO);
        expect(resposta).to.be.equals('ok');
      })
    })
  })

  // describe('Quando o arquivo não existe', () => {
  //   before(() => {
  //     sinon
  //       .stub(fs, 'writeFileSync')
  //       .throws(new Error('Arquivo não encontrado'));
  //   });

  //   after(() => {
  //     fs.writeFileSync.restore();
  //   });

  //   describe('a resposta', () => {
  //     it('é igual a "null"', () => {
  //       const resposta = writeFile('arquivo_que_nao_existe.txt');

  //       expect(resposta).to.be.equal(null);
  //     });
  //   });
  // });
})
