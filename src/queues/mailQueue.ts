import Queue, { Job } from 'bull';
import { Queue as TypeQueue } from "bull";

// Create a Bull queue instance
export const exampleQueue: TypeQueue = new Queue('exampleQueue', {
    limiter: { max: 100, duration: 10000 }, // optional rate limiter
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: 6379
    }
});

const processJob = async (job: Job, done: any) => {
    try {
        console.log(`Processing job ${job.id}`);

        await new Promise((resolve) => { setTimeout(resolve, 20) });

        console.log(`Job Processed ${job.id} & ${job.data}`);
        done();

        console.log(`Done function executed`);
        return job.data;
    } catch (err) {
        done(err);
        console.log("error while exiting from the process", err.message);
        return err.message;
    }
};

exampleQueue.process(processJob);

exampleQueue.on('error', (error) => {
    console.error('Queue error:', error);
});

exampleQueue.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error:`, err);
});

process.on('SIGTERM', async () => {
    await exampleQueue.close();
    process.exit(0);
});

process.on('SIGINT', async () => {
    await exampleQueue.close();
    process.exit(0);
});