FROM ruby:3.1.2

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

CMD ["rails", "server", "-b", "0.0.0.0"]
