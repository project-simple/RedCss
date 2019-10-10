describe('Test RedCss', function () {
	describe('Test tag', function () {
		it('test html - get/set', function () {
			RedCss('html').S('background', 'red')
			expect(RedCss('html').S('background')).to.equal('red');
		});
		it('test html - get/set', function () {
			RedCss('html').S('background', 'yellow')
			expect(RedCss('html').S('background')).to.equal('yellow');
		});
		it('test body - get/set', function () {
			RedCss('html').S('background', 'red')
			expect(RedCss('html').S('background')).to.equal('red');
		});
		it('test body - get/set', function () {
			RedCss('html').S('background', 'blue')
			expect(RedCss('html').S('background')).to.equal('blue');
		});
		it('test body - remove', function () {
			RedCss('html').remove()
			RedCss('body').remove()
			expect(RedCss('html').S('background')).to.be.empty;
		});
	});
	describe('Test id', function () {
		it('test #test-id - get/set', function () {
			RedCss('#test-id').S('background', 'yellow')
			expect(RedCss('#test-id').S('background')).to.equal('yellow');
		});
		it('test #test-id - get/set', function () {
			RedCss('#test-id').S('background', 'red')
			expect(RedCss('#test-id').S('background')).to.equal('red');
		});
	});
	describe('Test class', function () {
		it('test .test-class - get/set', function () {
			RedCss('.test-class').S('background', 'yellow')
			expect(RedCss('.test-class').S('background')).to.equal('yellow');
		});
		it('test test-class - get/set', function () {
			RedCss('.test-class').S('background', 'purple')
			expect(RedCss('.test-class').S('background')).to.equal('purple');
		});
	});
	describe('Test class', function () {
		it('test .test-class2 - get/set', function () {
			RedCss('.test-class2').S('background', 'yellow')
			expect(RedCss('.test-class2').S('background')).to.equal('yellow');
		});
		it('test test-class2 - get/set', function () {
			RedCss('.test-class2').S('background', 'purple')
			expect(RedCss('.test-class2').S('background')).to.equal('purple');
		});
	});
	describe('Test first-child', function () {
		it('test button:first-child - get/set', function () {
			RedCss('button:first-child').S('background', 'yellow')
			expect(RedCss('button:first-child').S('background')).to.equal('yellow');
		});
	});
	describe('Test last-child', function () {
		it('test button:last-child - get/set', function () {
			RedCss('button:last-child').S('background', 'blue')
			expect(RedCss('button:last-child').S('background')).to.equal('blue');
		});
	});
	describe('Test nth-child', function () {
		it('test .test-class2:nth-child(1) - get/set', function () {
			RedCss('.test-class2:nth-child(1)').S('background', 'yellow')
			expect(RedCss('.test-class2:nth-child(1)').S('background')).to.equal('yellow');
		});
		it('test .test-class2:nth-child(odd) - get/set', function () {
			RedCss('.test-class2:nth-child(odd)').S('background', 'yellow')
			expect(RedCss('.test-class2:nth-child(odd)').S('background')).to.equal('yellow');
		});
		it('test .test-class2:nth-child(even) - get/set', function () {
			RedCss('.test-class2:nth-child(even)').S('background', 'blue')
			expect(RedCss('.test-class2:nth-child(even)').S('background')).to.equal('blue');
		});
	});
	describe('Test keyName', function () {
		it('test keyName', function () {
			RedCss('button').S('padding-left', 10)
			expect(RedCss('button').S('padding-left')).to.equal(10);
		});
		it('test keyName', function () {
			RedCss('button').S('paddingLeft', 20)
			expect(RedCss('button').S('padding-left')).to.equal(20);
		});
		it('test keyName', function () {
			RedCss('button').S('padding-right', '10%')
			expect(RedCss('button').S('padding-right')).to.equal('10%');
		});
	});
	describe('Test unit', function () {
		it('test unit', function () {
			RedCss('button').S('margin-left', 10)
			expect(RedCss('button').S('margin-left')).to.equal(10);
		});
		it('test unit', function () {
			RedCss('button').S('margin-left', '20%')
			expect(RedCss('button').S('margin-left')).to.equal('20%');
		});
		it('test unit', function () {
			RedCss('button').S('margin-left', '10em')
			expect(RedCss('button').S('margin-left')).to.equal('10em');
		});

	});
	describe('Test remove', function () {

		it('test unit', function () {
			RedCss('button').remove()
			expect(RedCss('button').S('margin-left')).to.equal('');
		});
	});
});