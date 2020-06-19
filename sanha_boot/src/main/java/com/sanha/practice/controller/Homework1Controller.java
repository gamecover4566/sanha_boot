package com.sanha.practice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Homework1Controller {
	@GetMapping("/add")
	@ResponseBody
	public String add(Model model, int value1, int value2) {
		int result = value1 + value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "add";
	}	
	
	@GetMapping("/sub")
	@ResponseBody
	public String sub(Model model,int value1, int value2) {
		int result = value1 - value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "sub";
	}
		
	@GetMapping("/mul")
	@ResponseBody
	public String mul(Model model, int value1, int value2) {
		int result = value1 * value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "mul";
	}
	
	@GetMapping("/div")
	@ResponseBody
	public String div(Model model, int value1, int value2) {
		int result = value1 / value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "div";
	}
}
