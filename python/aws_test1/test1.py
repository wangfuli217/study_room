import boto3;

s3 = boto3.resource('s3');
for bucket in s3.buckets.all():
    print(bucket.name)

data = open('test1.py', 'rb')
s3.Bucket('cloudrain21-picture').put_object(Key='test1.py', Body=data)


