'use strict';

goog.provide('Blockly.JavaScript.operators');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['operator_add'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " + " + value_num2;

  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['operator_subtract'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " - " + value_num2;

  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['operator_multiply'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " * " + value_num2;

  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['operator_divide'] = function (block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_num1 + " / " + value_num2;

  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['operator_random'] = function (block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ATOMIC);

  if (value_from > value_to) {
    var c = value_from;
    value_from = value_to;
    value_to = c;
  }

  let code = "Math.floor(Math.random() * (" + value_to + " - " + value_from + " + 1) + "+ value_from + ")";

  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['operator_lt'] = function (block) {
  var value_operand1 = Blockly.JavaScript.valueToCode(block, 'OPERAND1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_operand2 = Blockly.JavaScript.valueToCode(block, 'OPERAND2', Blockly.JavaScript.ORDER_ATOMIC);

  let code = value_operand1 + " < " + value_operand2;

  code = code.replace(/\'/gi,'')

  return [code, Blockly.JavaScript.ORDER_NONE];
}