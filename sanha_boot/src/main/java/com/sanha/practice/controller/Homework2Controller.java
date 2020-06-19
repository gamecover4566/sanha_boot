package com.sanha.practice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Homework2Controller {
	@GetMapping("/calendar")
	public String createCalendar() {
		return "calendar";
	}
}
