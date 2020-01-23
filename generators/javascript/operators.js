'use strict';

goog.provide('Blockly.JavaScript.operators');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['operator_add'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " + " + value_num2;

  return code;
}

Blockly.JavaScript['operator_subtract'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " - " + value_num2;

  return code;
}

Blockly.JavaScript['operator_multiply'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " * " + value_num2;

  return code;
}

Blockly.JavaScript['math_number'] = function (block) {
  // Numeric value. 
  var code = parseFloat(block.getFieldValue('NUM'));
  var order;
  if (code == Infinity) {
    code = 'float("inf")';
    order = Blockly.JavaScript.ORDER_FUNCTION_CALL;
  } else if (code == -Infinity) {
    code = '-float("inf")';
    order = Blockly.JavaScript.ORDER_UNARY_SIGN;
  } else {
    order = code < 0 ? Blockly.JavaScript.ORDER_UNARY_SIGN : Blockly.JavaScript.ORDER_ATOMIC;
  } return [code, order];
};