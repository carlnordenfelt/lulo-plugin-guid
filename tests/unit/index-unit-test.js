'use strict';

var expect = require('chai').expect;

describe('Index unit tests', function () {
    var subject = require('../../src/index');
    var event;
    beforeEach(function () {
        event = { };
    });

    describe('validate', function () {
        it('should succeed', function (done) {
            subject.validate(event);
            done();
        });
    });

    describe('create', function () {
        it('should succeed', function (done) {
            subject.create(event, {}, function (error, response) {
                expect(error).to.equal(null);
                expect(response.physicalResourceId).to.be.a('string');
                done();
            });
        });
    });

    describe('update', function () {
        it('should succeed', function (done) {
            event.PhysicalResourceId = 'predefinedGuid'
            subject.update(event, {}, function (error, response) {
                expect(error).to.equal(null);
                expect(response.physicalResourceId).to.equal('predefinedGuid');
                done();
            });
        });
    });

    describe('delete', function () {
        it('should succeed', function (done) {
            subject.delete(event, {}, function (error, response) {
                expect(error).to.equal(undefined);
                expect(response).to.equal(undefined);
                done();
            });
        });
    });
});
