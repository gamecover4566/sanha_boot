package com.sanha.practice;


import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Thread {
	public static void main(String[] args) {
		ExecutorService executor = Executors.newFixedThreadPool(3);
		
		mythread thread1 = new mythread(13);
		mythread thread2 = new mythread(16);
		mythread thread3 = new mythread(17);
        
		FutureTask<String> future1 = new FutureTask<String>(thread1, "thread1");
		FutureTask<String> future2 = new FutureTask<String>(thread2, "thread2");
		FutureTask<String> future3 = new FutureTask<String>(thread3, "thread3");

		log.debug("dd");
		while(true) {
			try {
				executor.submit(future1);
				future1.get();
				executor.submit(future2);
				future2.get();
				executor.submit(future3);
				future3.get();				
	    		
	    		if(future1.isDone() && future2.isDone() && future3.isDone()) {
	    			executor.shutdown();
	    			
	    			return ;	    			
	    		}
			} 
			catch (Exception exception) {
				exception.printStackTrace();
			}
			
		}
	}
}

class mythread implements Runnable {
	private static int value = 10;
	
	public mythread(int value) {
		mythread.value = value;
	}
	
	@Override
	public void run() {
		try {
			System.out.println("value = " + mythread.value);
		}
		catch (Exception exception) {
			exception.printStackTrace();
		}
	}
}