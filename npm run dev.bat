@echo off

rem Change the directory to the new folder location
cd /d H:\Project\ema-john-simple-client

rem Open Visual Studio Code and run the development server
call code . && npm run dev
