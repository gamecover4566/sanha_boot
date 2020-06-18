package com.sanha.practice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeworkController {
	@GetMapping("/add")
	public String add(Model model, @RequestParam("val1") int value1, @RequestParam("val2") int value2) {
		int result = value1 + value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "add";
	}
	
	@GetMapping("/sub")
	public String sub(Model model, @RequestParam("val1") int value1, @RequestParam("val2") int value2) {
		int result = value1 - value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "sub";
	}
	
	@GetMapping("/mul")
	public String mul(Model model, @RequestParam("val1") int value1, @RequestParam("val2") int value2) {
		int result = value1 * value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "mul";
	}
	
	@GetMapping("/div")
	public String div(Model model, @RequestParam("val1") int value1, @RequestParam("val2") int value2) {
		int result = value1 / value2;
		
		model.addAttribute("val1", value1);
		model.addAttribute("val2", value2);
		model.addAttribute("result", result);
		
		return "div";
	}
}
